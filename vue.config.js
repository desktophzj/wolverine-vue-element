module.exports  = {
    // this will tell Vue to use a relative path in production and an absolute path in development
    publicPath: process.env.NODE_ENV  ===  'production'  ?  './'  :  '/'
}