const puppeteer = require('puppeteer');

async function exportBaiduSearchResultsToPdf() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 导航到百度搜索结果页面
  await page.goto(
    'https://www.baidu.com/s?wd=%E5%81%9A%E6%8A%97%E6%B4%AA%E6%95%91%E7%81%BE%E9%87%8D%E5%BB%BA%E5%AE%B6%E5%9B%AD%E7%9A%84%E4%B8%BB%E4%BA%BA',
    {
      waitUntil: 'networkidle0',
    },
  );

  // 等待一段时间，确保页面加载完成
  await page.waitForSelector('#content_left');

  // 将页面保存为 PDF 文件
  await page.pdf({ path: 'output.pdf', format: 'LETTER' });

  await browser.close();

  console.log('PDF 导出完成！');
}

// 调用函数将百度搜索结果导出为 PDF
exportBaiduSearchResultsToPdf();
