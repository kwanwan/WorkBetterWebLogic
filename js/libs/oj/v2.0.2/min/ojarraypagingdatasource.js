/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","knockout","ojs/ojdatasource-common"],function(a,f,b){a.Bb=function(a){this.data=a;this.current=0;this.Init();this.SL(10)};o_("ArrayPagingDataSource",a.Bb,a);a.b.ga(a.Bb,a.Xi,"oj.ArrayPagingDataSource");a.Bb.prototype.Init=function(){a.Bb.r.Init.call(this)};a.b.g("ArrayPagingDataSource.prototype.Init",{Init:a.Bb.prototype.Init});a.Bb.prototype.yJ=function(){return this.Yw()?this.tm:this.totalSize()-this.current};a.Bb.prototype.Nq=function(a){a=a||{};this.Mf=Array(this.yJ());
for(var b=0;b<this.Mf.length;b++)this.Mf[b]=this.data[this.current+b];this.Px();this.wi=this.$+this.Mf.length-1;a.silent||this.handleEvent("sync",{data:this.Mf,startIndex:this.current})};a.Bb.prototype.Px=function(){if(void 0!==this.Uj){this.Uj.removeAll();for(var a=0;a<this.Mf.length;a++)this.Uj.push(this.Mf[a])}};a.Bb.prototype.handleEvent=function(b,c){return a.Bb.r.handleEvent.call(this,b,c)};a.Bb.prototype.Dm=function(){return this.Mf};a.b.g("ArrayPagingDataSource.prototype.getWindow",{Dm:a.Bb.prototype.Dm});
a.Bb.prototype.Oy=function(){void 0===this.Uj&&(this.Uj=b.observableArray(),this.Px());return this.Uj};a.b.g("ArrayPagingDataSource.prototype.getWindowObservable",{Oy:a.Bb.prototype.Oy});a.Bb.prototype.getPage=function(){return this.Kc};a.b.g("ArrayPagingDataSource.prototype.getPage",{getPage:a.Bb.prototype.getPage});a.Bb.prototype.setPage=function(b,c){c=c||{};b=parseInt(b,10);try{a.Bb.r.handleEvent.call(this,a.bc.D.BEFOREPAGE,{page:b,previousPage:this.Kc})}catch(e){return Promise.reject(null)}this.pageSize=
null!=c.pageSize?c.pageSize:this.pageSize;c.startIndex=b*this.pageSize;var f=this.Kc;this.Kc=b;this.$=c.startIndex;var h=this;return new Promise(function(b,d){h.Ie(c).then(function(){a.Bb.r.handleEvent.call(h,a.bc.D.PAGE,{page:h.Kc,previousPage:f});b(null)},function(){h.Kc=f;h.$=h.Kc*h.pageSize;d(null)})})};a.b.g("ArrayPagingDataSource.prototype.setPage",{setPage:a.Bb.prototype.setPage});a.Bb.prototype.getStartItemIndex=function(){return this.$};a.b.g("ArrayPagingDataSource.prototype.getStartItemIndex",
{getStartItemIndex:a.Bb.prototype.getStartItemIndex});a.Bb.prototype.getEndItemIndex=function(){return this.wi};a.b.g("ArrayPagingDataSource.prototype.getEndItemIndex",{getEndItemIndex:a.Bb.prototype.getEndItemIndex});a.Bb.prototype.getPageCount=function(){var a=this.totalSize();return-1==a?-1:Math.ceil(a/this.pageSize)};a.b.g("ArrayPagingDataSource.prototype.getPageCount",{getPageCount:a.Bb.prototype.getPageCount});a.Bb.prototype.fetch=function(a){a=a||{};if(void 0!==a.pageSize&&void 0!==a.startIndex){if(!this.Yw())return Promise.resolve();
this.tm=a.startIndex+a.pageSize}this.Nq(null);return Promise.resolve()};a.b.g("ArrayPagingDataSource.prototype.fetch",{fetch:a.Bb.prototype.fetch});a.Bb.prototype.Ie=function(a){var b=a||{};void 0!==b.startIndex&&(this.current=b.startIndex);void 0!==b.pageSize&&(this.tm=this.pageSize=b.pageSize);this.Nq(a);return Promise.resolve({data:this.Mf,startIndex:this.current})};a.Bb.prototype.Yw=function(){return this.current+this.tm<this.totalSize()};a.Bb.prototype.SL=function(a){this.tm=this.pageSize=a;
this.Nq(null)};a.Bb.prototype.totalSize=function(){return this.data.length};a.Bb.prototype.totalSizeConfidence=function(){return"actual"};a.b.g("ArrayPagingDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:a.Bb.prototype.totalSizeConfidence});a.Bb.prototype.getCapability=function(){return null};a.b.g("ArrayPagingDataSource.prototype.getCapability",{getCapability:a.Bb.prototype.getCapability})});