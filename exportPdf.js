const puppeteer = require('puppeteer');

async function exportBaiduSearchResultsToPdf() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 导航到百度搜索结果页面
  await page.goto('https://www.zhihu.com/explore', {
    waitUntil: 'networkidle0',
  });

  // 等待一段时间，确保页面加载完成
  await page.waitForSelector('.App-main');

  // 将页面保存为 PDF 文件
  await page.pdf({ path: 'output.pdf', format: 'LETTER' });

  await browser.close();

  console.log('PDF 导出完成！');
}

// 调用函数将百度搜索结果导出为 PDF
exportBaiduSearchResultsToPdf();
