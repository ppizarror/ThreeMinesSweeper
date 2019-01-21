"use strict";var sys=require("lodash"),Validator=require("jjv"),Base=require("../base"),Schema=Base.compose([Base],{constructor:function(){var s=new Validator;this._defaultSchemaName=sys.result(this,"_defaultSchemaName")||sys.uniqueId("schema"),this.validationOptions=sys.defaults({},sys.result(this,"validationOptions"),{checkRequired:!0}),this.validate=function(t,e,i){return 0===arguments.length?(t=this,e=this._defaultSchemaName,i=this.validationOptions):(sys.isString(t)&&(e=t,t=this),sys.isEmpty(i)&&(i=this.validationOptions)),s.validate(e,t,i)},this.registerSchemas=function(t){var e=sys.result(this,"schema");t=t||sys.result(this,"schemas");sys.isEmpty(e)||s.addSchema(this._defaultSchemaName,e),sys.isEmpty(t)||sys.each(t,function(t,e){s.addSchema(t,e)})},this.extract=function(s,t){0===arguments.length&&(s=this,this._defaultSchemaName),sys.isString(s)&&(s,s=this)},this.addType=s.addType,this.addFormat=s.addFormat,this.addCheck=s.addCheck,this.addTypeCoercion=s.addTypeCoercion,this.getSchema=function(t){return!sys.isEmpty(t)&&sys.isString()||(t=this._defaultSchemaName),s.schema[t]}},extract:function(s,t){sys.isObject(s)&&(t=e,s=this._defaultSchemaName),sys.isEmpty(t)&&(t=this),sys.isFunction(t.toJSON)&&(t=t.toJSON());var e=this.getSchema(s)||{},i={};return sys.each(e.properties,function(s,e){s.properties&&!sys.isUndefined(t[e])?i[e]=this.extract(s,t[e]):sys.isUndefined(t[e])||(i[e]=t[e])},this),i},defaultDoc:function(s){sys.isEmpty(s)&&(s=this._defaultSchemaName);var t,e={};return t=sys.isObject(s)?s:this.getSchema(s)||{},sys.each(t.properties,function(s,i){var a=s.default;"object"!==s.type||sys.isEmpty(s.properties)?sys.isFunction(a)||sys.isBoolean(a)||sys.isNumber(a)||!sys.isEmpty(a)?sys.isFunction(a)?e[i]=a(t):e[i]=a:s.required&&("string"===s.type?e[i]=null:"object"===s.type?e[i]={}:"array"===s.type?e[i]=[]:e[i]=null):e[i]=this.defaultDoc(s)},this),e}});module.exports=Schema;