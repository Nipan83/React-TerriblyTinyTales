'use strict'

var app = require('../app')
var request = require('supertest')

var mocha = require('mocha')

var expect = require('chai').expect
var describe = mocha.describe
var it = mocha.it


describe('home', function () {
  it('Should show the home page', function (done) {
    	    request(app)
            .get('/')
            .expect(200,done)

  })
})

describe('result', function () {
  it('Should show the result page', function (done) {

    	    request(app)

            .post('/send')
	    .send({"items":{"key":"I","value":"10"}})
            .expect(200,done)


  })
})
