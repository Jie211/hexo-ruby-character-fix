'use strict';
/**
 * Hexo Pinyin Character
 * 
 * Syntax:
 *   {% pinyin base|text %}
 * 
 *   e.g.:
 *   {% pinyin Base|top %}
 *   {% pinyin 佐天泪子|掀裙狂魔 %}  (If the top field is in Chinese characters, it while be converted to Chinese pinyin, because the pinyin chatater with heads are not easy to type.)
 *   {% pinyin 超電磁砲|レールガン %}
 */
const Pinyin = require("pinyin");

hexo.extend.tag.register('pinyin', function (args) {
  const splited = args.join(' ').split('|');
  const origin = splited[0].trim();
  var ruby = origin;
  if (splited.length > 1) {
    ruby = splited[1].trim();
  }

  const pinyinic_ruby = [].concat.apply([], Pinyin(ruby, {
    segment: true
  }));

  return "<ruby><rb>" + origin + "</rb><rp>(</rp><rt>" + pinyinic_ruby.join(' ') + "</rt><rp>)</rp></ruby>";
});

/**
 * Hexo Ruby Character Ex
 * 
 * Syntax:
 *   {% ruby base|text %}
 * 
 *   e.g.:
 *     {% ruby Base|top %}
 *     {% ruby 佐天泪子|掀裙狂魔 %}
 *     {% ruby 超電磁砲|レールガン %}
 */
hexo.extend.tag.register('ruby', function (args) {
  const splited = args.join(' ').split('|');
  const ruby_base = splited[0].trim();
  const ruby_text = splited[1].trim();

  return "<ruby><rb>" + ruby_base + "</rb><rp>(</rp><rt>" + ruby_text + "</rt><rp>)</rp></ruby>";
});
