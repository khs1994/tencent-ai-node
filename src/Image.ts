import AbstractTencentAI from './AbstractTencentAI';
import { URIS, commonParams, error } from './util/util';
import Request from './client/Request';
import TencentAIResult from './TencentAIResult';

export default class Image extends AbstractTencentAI {
  /**
   * 图片识别公共 API 服务类
   *
   * @method porn(image) 智能鉴黄
   * @method terrorism(image) 暴恐识别
   * @method scener(image) 场景识别
   * @method objectr(image) 物体识别
   * @method imagetag(image) 图像标签识别
   * @method imgidentify(image) 花草/车辆识别
   * @method imgtotext(image) 看图说话
   * @method imagefuzzy(image) 模糊图片检测
   * @method imagefood(image) 获取人脸信息
   */

  /**
   * 智能鉴黄
   *
   * 识别一个图像是否为色情图像
   *
   * @see https://ai.qq.com/doc/jianhuang.shtml
   * @param {String} image 待识别图片 本地图片路径 | 图片的 base64 编码数据 | 图片 url （大小上限1MB）
   * @param {String} image_url
   *
   * @return {Promise} A Promise Object
   */
  async porn(image: string = '', image_url: string = '') {
    if (!image && !image_url) {
      return error('image and url all empty');
    }

    image = await this.readFileSync(image);

    return Request(
      this.proxy,
      URIS.porn,
      this.appKey,
      Object.assign(
        {},
        commonParams(),
        { app_id: this.appId },
        image ? { image } : { image_url },
      ),
    );
  }

  /**
   * 暴恐识别
   *
   * 识别一个图像是否为暴恐图像
   *
   * @see https://ai.qq.com/doc/imageterrorism.shtml
   * @param {String} image 待识别图片 本地图片路径 | 图片的 base64 编码数据 | 图片 url （大小上限1MB）
   * @param {String} image_url
   *
   * @return {Promise} A Promise Object
   */
  async terrorism(image: string = '', image_url: string = '') {
    if (!image && !image_url) {
      return error('image and url all empty');
    }

    image = await this.readFileSync(image);

    return Request(
      this.proxy,
      URIS.terrorism,
      this.appKey,
      Object.assign(
        {},
        commonParams(),
        { app_id: this.appId },
        image_url ? { image_url } : { image },
      ),
    );
  }

  /**
   * 场景识别
   *
   * 场景识别接口提供场景识别能力，可以帮您快速找出图片中包含的场景信息。
   *
   * @see https://ai.qq.com/doc/visionimgidy.shtml
   * @param {String} image 待识别图片 本地图片路径 | 图片的 base64 编码数据 | 图片 url （大小上限1MB）
   * @param {Number} format 默认1 图片格式 [1  JPG格式（image/jpeg）]
   * @param {Number} topk 默认1 返回结果个数（已按置信度倒排）[1-5]
   *
   * @return {Promise} A Promise Object
   */
  async scener(
    image: string,
    format: 1 = 1,
    topk: 1 | 2 | 3 | 4 | 5 = 1,
  ): Promise<TencentAIResult> {
    image = await this.readFileSync(image);

    return Request(
      this.proxy,
      URIS.scener,
      this.appKey,
      Object.assign({}, commonParams(), {
        app_id: this.appId,
        image,
        format,
        topk,
      }),
    );
  }

  /**
   * 物体识别
   *
   * 物体识别接口提供物体识别能力，可以帮您快速找出图片中包含的物体信息。
   *
   * @see https://ai.qq.com/doc/visionimgidy.shtml
   * @param {String} image 待识别图片 本地图片路径 | 图片的 base64 编码数据 | 图片 url （大小上限1MB）
   * @param {Number} format 默认1 图片格式 [1  JPG格式（image/jpeg）]
   * @param {Number} topk 默认1 返回结果个数（已按置信度倒排）[1-5]
   *
   * @return {Promise} A Promise Object
   */
  async objectr(
    image: string,
    format: 1 = 1,
    topk: 1 | 2 | 3 | 4 | 5 = 1,
  ): Promise<TencentAIResult> {
    image = await this.readFileSync(image);

    return Request(
      this.proxy,
      URIS.objectr,
      this.appKey,
      Object.assign({}, commonParams(), {
        app_id: this.appId,
        image,
        format,
        topk,
      }),
    );
  }

  /**
   * 图像标签识别
   *
   * 识别一个图像的标签信息,对图像分类
   *
   * @see https://ai.qq.com/doc/imagetag.shtml
   * @param {String} image 待识别图片 本地图片路径 | 图片的 base64 编码数据 | 图片 url （大小上限1MB）
   *
   * @return {Promise} A Promise Object
   */
  async tag(image: string): Promise<TencentAIResult> {
    image = await this.readFileSync(image);

    return Request(
      this.proxy,
      URIS.imagetag,
      this.appKey,
      Object.assign({}, commonParams(), {
        app_id: this.appId,
        image,
      }),
    );
  }

  /**
   * 花草/车辆识别
   *
   * 花草/车辆识别接口提供特定类别的识别能力，可以根据您选择的场景识别出图片中的花草或车辆信息，目前已覆盖3000种常见花草，近3000类车型。
   *
   * @see https://ai.qq.com/doc/imgidentify.shtml
   * @param {String} image 待识别图片 本地图片路径 | 图片的 base64 编码数据 | 图片 url （大小上限1MB）
   * @param {Number} scene  识别场景，1-车辆识别，2-花草识别
   *
   * @return {Promise} A Promise Object
   */
  async identify(image: string, scene: 1 | 2 = 1): Promise<TencentAIResult> {
    image = await this.readFileSync(image);

    return Request(
      this.proxy,
      URIS.imgidentify,
      this.appKey,
      Object.assign({}, commonParams(), {
        app_id: this.appId,
        image,
        scene,
      }),
    );
  }

  /**
   * 看图说话
   *
   * 用一句话文字描述图片。
   *
   * @see https://ai.qq.com/doc/imgtotext.shtml
   * @param {String} image 待识别图片 本地图片路径 | 图片的 base64 编码数据 | 图片 url （大小上限1MB）
   * @param {String} session_id  一次请求ID 尽可能唯一，长度上限64字节
   *
   * @return {Promise} A Promise Object
   */
  async toText(image: string, session_id: string): Promise<TencentAIResult> {
    image = await this.readFileSync(image);

    return Request(
      this.proxy,
      URIS.imgtotext,
      this.appKey,
      Object.assign({}, commonParams(), {
        app_id: this.appId,
        image,
        session_id,
      }),
    );
  }

  /**
   * 模糊图片检测
   *
   * 判断一个图像的模糊程度。
   *
   * @see https://ai.qq.com/doc/imagefuzzy.shtml
   * @param {String} image 待识别图片 本地图片路径 | 图片的 base64 编码数据 | 图片 url （大小上限1MB）
   *
   * @return {Promise} A Promise Object
   */
  async fuzzy(image: string): Promise<TencentAIResult> {
    image = await this.readFileSync(image);

    return Request(
      this.proxy,
      URIS.imagefuzzy,
      this.appKey,
      Object.assign({}, commonParams(), {
        app_id: this.appId,
        image,
      }),
    );
  }

  /**
   * 美食图片识别
   *
   * 识别一个图像是否为美食图像。
   *
   * @see https://ai.qq.com/doc/imagefood.shtml
   * @param {String} image 待识别图片 本地图片路径 | 图片的 base64 编码数据 | 图片 url （大小上限1MB）
   *
   * @return {Promise} A Promise Object
   */
  async food(image: string): Promise<TencentAIResult> {
    image = await this.readFileSync(image);

    return Request(
      this.proxy,
      URIS.imagefood,
      this.appKey,
      Object.assign({}, commonParams(), {
        app_id: this.appId,
        image,
      }),
    );
  }
}
