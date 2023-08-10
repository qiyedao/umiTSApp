import { Component } from 'react';

import {
  AreaHighlight,
  Highlight,
  PdfHighlighter,
  PdfLoader,
  Popup,
  Tip,
} from 'react-pdf-highlighter';

import type { IHighlight, NewHighlight } from 'react-pdf-highlighter';

import { PDFDocument, rgb } from 'pdf-lib';
import { Sidebar } from './Sidebar';
import { Spinner } from './Spinner';

import { testHighlights as _testHighlights } from './test-highlights';
const testHighlights: Record<string, Array<IHighlight>> = _testHighlights;

interface State {
  url: string;
  highlights: Array<IHighlight>;
}

const getNextId = () => String(Math.random()).slice(2);

const parseIdFromHash = () =>
  document.location.hash.slice('#highlight-'.length);

const resetHash = () => {
  document.location.hash = '';
};

const HighlightPopup = ({
  comment,
}: {
  comment: { text: string; emoji: string };
}) =>
  comment.text ? (
    <div className="Highlight__popup">
      {comment.emoji} {comment.text}
    </div>
  ) : null;

const PRIMARY_PDF_URL = 'https://arxiv.org/pdf/1708.08021.pdf';
const SECONDARY_PDF_URL = 'https://arxiv.org/pdf/1604.02480.pdf';

const searchParams = new URLSearchParams(document.location.search);

const initialUrl = searchParams.get('url') || PRIMARY_PDF_URL;

class App extends Component<{}, State> {
  state = {
    url: initialUrl,
    highlights: testHighlights[initialUrl]
      ? [...testHighlights[initialUrl]]
      : [],
  };

  resetHighlights = () => {
    this.setState({
      highlights: [],
    });
  };

  handleSavePDF = async () => {
    const { highlights } = this.state;
    const existingPdfUrl = PRIMARY_PDF_URL;
    const existingPdfBytes = await fetch(existingPdfUrl).then((res) =>
      res.arrayBuffer(),
    );

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    console.log('pdfDoc', pdfDoc);

    const pages = pdfDoc.getPages();
    console.log('pages', pages);

    highlights.forEach((highlight) => {
      console.log('highlight', highlight);

      const { position, content } = highlight;
      const { boundingRect, pageNumber } = position;
      const page = pages[pageNumber - 1];
      console.log('page', page);

      page.drawRectangle({
        x: boundingRect.x1,
        y: boundingRect.y1,
        width: boundingRect.x2 - boundingRect.x1,
        height: boundingRect.y2 - boundingRect.y1,
        borderColor: rgb(1, 0, 0),
        borderWidth: 1,
      });

      page.drawText(content.text || '', {
        x: boundingRect.x1 + 5,
        y: boundingRect.y1 + 5,
        size: 10,
        color: rgb(1, 0, 0),
      });
    });

    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);

    // 创建一个下载链接，并触发下载
    const a = document.createElement('a');
    a.href = url;
    a.download = 'highlighted_pdf.pdf';
    a.click();

    // 可以选择将新的 PDF 文件上传到服务器
    // ...
  };
  toggleDocument = () => {
    const newUrl =
      this.state.url === PRIMARY_PDF_URL ? SECONDARY_PDF_URL : PRIMARY_PDF_URL;

    this.setState({
      url: newUrl,
      highlights: testHighlights[newUrl] ? [...testHighlights[newUrl]] : [],
    });
  };

  scrollViewerTo = (highlight: any) => {};

  scrollToHighlightFromHash = () => {
    const highlight = this.getHighlightById(parseIdFromHash());

    if (highlight) {
      this.scrollViewerTo(highlight);
    }
  };

  componentDidMount() {
    window.addEventListener(
      'hashchange',
      this.scrollToHighlightFromHash,
      false,
    );
  }

  getHighlightById(id: string) {
    const { highlights } = this.state;

    return highlights.find((highlight) => highlight.id === id);
  }

  addHighlight(highlight: NewHighlight) {
    const { highlights } = this.state;

    console.log('Saving highlight', highlight);

    this.setState({
      highlights: [{ ...highlight, id: getNextId() }, ...highlights],
    });
  }

  updateHighlight(highlightId: string, position: Object, content: Object) {
    console.log('Updating highlight', highlightId, position, content);

    this.setState({
      highlights: this.state.highlights.map((h) => {
        const {
          id,
          position: originalPosition,
          content: originalContent,
          ...rest
        } = h;
        return id === highlightId
          ? {
              id,
              position: { ...originalPosition, ...position },
              content: { ...originalContent, ...content },
              ...rest,
            }
          : h;
      }),
    });
  }

  render() {
    const { url, highlights } = this.state;

    return (
      <div className="App" style={{ display: 'flex', height: '100vh' }}>
        <Sidebar
          highlights={highlights}
          resetHighlights={this.resetHighlights}
          toggleDocument={this.handleSavePDF}
        />
        <div
          style={{
            height: '100vh',
            width: '75vw',
            position: 'relative',
          }}
        >
          <PdfLoader url={url} beforeLoad={<Spinner />}>
            {(pdfDocument) => (
              <PdfHighlighter
                pdfDocument={pdfDocument}
                enableAreaSelection={(event) => event.altKey}
                onScrollChange={resetHash}
                // pdfScaleValue="page-width"
                scrollRef={(scrollTo) => {
                  this.scrollViewerTo = scrollTo;

                  this.scrollToHighlightFromHash();
                }}
                onSelectionFinished={(
                  position,
                  content,
                  hideTipAndSelection,
                  transformSelection,
                ) => (
                  <Tip
                    onOpen={transformSelection}
                    onConfirm={(comment) => {
                      this.addHighlight({ content, position, comment });

                      hideTipAndSelection();
                    }}
                  />
                )}
                highlightTransform={(
                  highlight,
                  index,
                  setTip,
                  hideTip,
                  viewportToScaled,
                  screenshot,
                  isScrolledTo,
                ) => {
                  const isTextHighlight = !Boolean(
                    highlight.content && highlight.content.image,
                  );

                  const component = isTextHighlight ? (
                    <Highlight
                      isScrolledTo={isScrolledTo}
                      position={highlight.position}
                      comment={highlight.comment}
                    />
                  ) : (
                    <AreaHighlight
                      isScrolledTo={isScrolledTo}
                      highlight={highlight}
                      onChange={(boundingRect) => {
                        this.updateHighlight(
                          highlight.id,
                          { boundingRect: viewportToScaled(boundingRect) },
                          { image: screenshot(boundingRect) },
                        );
                      }}
                    />
                  );

                  return (
                    <Popup
                      popupContent={<HighlightPopup {...highlight} />}
                      onMouseOver={(popupContent) =>
                        setTip(highlight, (highlight) => popupContent)
                      }
                      onMouseOut={hideTip}
                      key={index}
                      children={component}
                    />
                  );
                }}
                highlights={highlights}
              />
            )}
          </PdfLoader>
        </div>
      </div>
    );
  }
}

export default App;
