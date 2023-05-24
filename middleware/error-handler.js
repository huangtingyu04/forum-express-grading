module.exports = {
  // Express 的文件中有告訴我們自己撰寫錯誤處理的 middleware 必須要有四個參數 (err, req, res, next)
  generalErrorHandler (err, req, res, next) {
    if (err instanceof Error) {
      req.flash('error_messages', `${err.name}: ${err.message}`)
      // 判斷傳入的 err 是不是一個 Error 物件,Error 物件裡面會有屬性 name 和 message，那麼就利用快閃訊息把值印出來給使用者看
    } else {
      req.flash('error_messages', `${err}`)
      // 如果不是 Error 物件，可能傳進來一堆錯誤報告，直接把字串印出來即可
    }
    res.redirect('back')
    next(err)
  }
}
