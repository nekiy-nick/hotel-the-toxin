const { get } = require("jquery");

let now = new Date();
let nowYear = String(now.getFullYear())

// ошибки в днях можно выбрать 00 и 32-39
// ошибки в месяцах можно выбрать 00 и 13-19

$.mask.definitions['d']='[0-3]';
console.log($.mask.definitions['d'])
$.mask.definitions['D']='[0-9]';
$.mask.definitions['m']='[0-1]';
$.mask.definitions['M']='[0-9]';

$.mask.definitions['y']=`[${nowYear[0]}]`;
$.mask.definitions['e']=`[${nowYear[1]}]`;
$.mask.definitions['a']=`[${nowYear[2]}-${Number(nowYear[2]) + 1}]`;
$.mask.definitions['r']=`[${nowYear[3]}-${Number(nowYear[3]) + 2}]`;

$(".js-input-text-field__input_masked").mask("dD.mM.year", { placeholder:"ДД ММ ГГГГ" });