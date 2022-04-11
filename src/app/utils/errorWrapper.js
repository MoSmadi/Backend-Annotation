import {
    BAD_REQUEST,
    INTERNAL_SERVER_ERROR,
    NOT_FOUND,
    UNAUTHORIZED,
    CONFLICT,
    UNAUTHENTICATED,
    NOT_ACCEPTED
  } from "@app/utils/httpConstants"
  
export default class ErrorWrapper {
    constructor(message) {
        this.message = message
        this.code = INTERNAL_SERVER_ERROR // default
    }

    notFound(res) {
        this.code = NOT_FOUND
        this.send(res)
    }
    
    notAccepted(res) {
        this.code = NOT_ACCEPTED
        this.send(res)
    }

    internalServerError(res) {
        this.code = INTERNAL_SERVER_ERROR

        if (this.message.indexOf("E11000") > -1) {
            this.code = CONFLICT
        }
        this.send(res)
    }

    conflict(res) {
        this.code = CONFLICT
        this.send(res)
    }

    unauthenticated(res) {
        this.code = UNAUTHENTICATED
        this.send(res)
    }
    
    badRequest(res) {
        this.code = BAD_REQUEST
        this.send(res)
    }

    unauthorized(res) {
        this.code = UNAUTHORIZED
        this.send(res)
    }

    send(res) {
        let returnedMsg = {
            status: this.code,
            message: this.message
            }
        if (res && !res.headersSent){
            res.status(this.code)
            res.json(returnedMsg)
        }
    }
}