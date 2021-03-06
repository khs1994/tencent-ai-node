// const randomstring = require('randomstring');

import * as assert from 'assert';

import { APP } from './util';

import { NLP, TencentAIError } from '../src/TencentAI';

const NLPTest = new NLP(APP.appkey, APP.appid);

describe('index', () => {
  it('index', () => {
    assert.throws(() => new NLP('', ''), TencentAIError);
  });
});

/**
 * 自然语言处理-基本类 API 测试文件
 */
describe('nlp', function() {
  this.retries(4);
  // 基本文本分析 分词
  it('wordseg', async () => {
    let r = await NLPTest.seg('中国 人啊，a c !  hello word');

    // console.log(r);

    assert.strictEqual(r.ret, 0);
  });

  // 词性定义
  it('wordpos', async () => {
    let r = await NLPTest.pos('腾讯人工智能');

    assert.strictEqual(r.ret, 0);
  });

  // 专有名词识别
  it('wordner', async () => {
    let r = await NLPTest.ner('最近张学友在深圳开了一场演唱会');

    r.data.ner_tokens.map(item => {
      assert.ok(item.types[0]);
    });
  });

  // 同义词识别
  it('wordsyn', async () => {
    let r = await NLPTest.syn('今天的天气怎么样');

    assert.strictEqual(r.ret, 0);
  });

  // 语义解析
  it('wordcom', async () => {
    let r = await NLPTest.com('今天深圳的天气怎么样？明天呢');

    assert.strictEqual(r.ret, 0);
  });

  // 情感分析识别
  it('textpolar', async function() {
    let r = await NLPTest.textPolar('今天的天气不错呀!()english');

    assert.strictEqual(r.ret, 0);
  });

  // 基础闲聊
  it('textchat', async function() {
    let r = await NLPTest.textChat(
      '今天的天气不错呀?!()',
      // randomstring.generate({
      //   length: 16,
      //   capitalization: 'uppercase',
      // }),
      'test',
    );

    assert.strictEqual(r.ret, 0);
  });
});
