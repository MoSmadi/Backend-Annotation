import ejs from 'ejs'
import express from 'express'
import path from 'path'

export default {
    renderEngine: ejs.renderFile,
    assets: express.static(path.join(__dirname, '..', 'assets')),
    favicon: express.static(path.join(__dirname, '..', 'assets/images/favicon.ico'))
}