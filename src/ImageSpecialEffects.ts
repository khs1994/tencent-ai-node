import AbstractTencentAI from './AbstractTencentAI';
import { URIS, commonParams, error } from './util/index';
import Request from './client/Request';

export default class ImageSpecialEffects extends AbstractTencentAI {
  /**
   * 图片特效API服务类
   *
   * @method facecosmetic(image, cosmetic) 人脸美妆
   * @method facedecoration(image, decoration) 人脸变妆
   * @method ptuimgfilter(image, filter) 图片滤镜（天天P图）
   * @method visionimgfilter(image, filter, session_id) 图片滤镜（AI Lab）
   * @method facemerge(image, model) 人脸融合
   * @method facesticker(image, sticker) 大头贴
   * @method faceage(image) 颜龄检测
   */

  /**
   * 人脸美妆
   *
   * 人脸美妆接口提供人脸美妆特效功能，可以帮您快速实现原始图片的人脸美妆特效处理
   *
   * @see https://ai.qq.com/doc/facecosmetic.shtml
   * @param {String} image 待处理图片 原始图片的base64编码数据（原图大小上限500KB）
   * @param {Number} cosmetic 美妆编码取值区间[1-23]
   *
   * @return {Promise} A Promise Object
   */
  facecosmetic(image, cosmetic = 1) {
    if (image && Buffer.byteLength(image, 'base64') >= 500 * 1024) {
      return error('image 不能为空且大小小于500KB');
    }
    if (cosmetic && cosmetic < 1 && cosmetic > 22) {
      return error('cosmetic 不能为空且取值区间为[1-23]');
    }
    return Request.request(
      URIS.facecosmetic,
      this.appKey,
      Object.assign({}, commonParams(), {
        app_id: this.appId,
        image: image,
        cosmetic: cosmetic,
      }),
    );
  }

  /**
   * 人脸变妆
   *
   * 人脸变妆接口提供人脸变妆特效功能，可以帮您快速实现原始图片的人脸变妆特效处理。
   *
   * @see https://ai.qq.com/doc/facedecoration.shtml
   * @param {String} image 待处理图片 原始图片的base64编码数据（原图大小上限500KB）
   * @param {Number} decoration 人脸变妆编码取值区间[1-22]
   *
   * @return {Promise} A Promise Object
   */
  facedecoration(image, decoration = 1) {
    if (image && Buffer.byteLength(image, 'base64') >= 500 * 1024) {
      return error('image 不能为空且大小小于500KB');
    }
    if (decoration && decoration < 1 && decoration > 22) {
      return error('decoration 不能为空且取值区间为[1-22]');
    }
    return Request.request(
      URIS.facedecoration,
      this.appKey,
      Object.assign({}, commonParams(), {
        app_id: this.appId,
        image: image,
        decoration: decoration,
      }),
    );
  }

  /**
   * 图片滤镜(天天P图)
   *
   * 图片滤镜接口提供滤镜特效功能，可以帮您快速实现原始图片的滤镜特效处理。
   *
   * @see https://ai.qq.com/doc/ptuimgfilter.shtml
   * @param {String} image 待处理图片 原始图片的base64编码数据（原图大小上限500KB）
   * @param {Number} filter 滤镜特效编码取值区间[1-32]
   *
   * @return {Promise} A Promise Object
   */
  ptuimgfilter(image, filter) {
    if (image && Buffer.byteLength(image, 'base64') >= 500 * 1024) {
      return error('image 不能为空且大小小于500KB');
    }
    if (filter && filter < 1 && filter > 32) {
      return error('filter 不能为空且取值区间为[1-32]');
    }
    return Request.request(
      URIS.ptuimgfilter,
      this.appKey,
      Object.assign({}, commonParams(), {
        app_id: this.appId,
        image: image,
        filter: filter,
      }),
    );
  }

  /**
   * 图片滤镜（AI Lab）
   *
   * 图片滤镜接口提供滤镜特效功能，可以帮您快速实现原始图片的滤镜特效处理
   *
   * @see https://ai.qq.com/doc/ptuimgfilter.shtml
   * @param {String} image 待处理图片 原始图片的base64编码数据（原图大小上限1MB）
   * @param {Number} filter 滤镜特效编码取值区间[1-65]
   * @param {String} session_id 一次请求ID 尽可能唯一，长度上限64字节
   *
   * @return {Promise} A Promise Object
   */
  visionimgfilter(image, filter, session_id) {
    if (image && Buffer.byteLength(image, 'base64') >= 1048576) {
      return error('image 不能为空且大小小于1M');
    }
    if (filter && filter < 1 && filter > 65) {
      return error('filter 不能为空且取值区间为[1-65]');
    }
    if (session_id && Buffer.byteLength(session_id, 'base64') > 64) {
      return error('session_id 不能为空且大小小于65b');
    }
    return Request.request(
      URIS.visionimgfilter,
      this.appKey,
      Object.assign({}, commonParams(), {
        app_id: this.appId,
        image: image,
        filter: filter,
        session_id: session_id,
      }),
    );
  }

  /**
   * 人脸融合
   *
   * 人脸融合接口提供人脸融合特效功能，可以帮您快速实现原始图片的人脸融合特效处理
   *
   * @see https://ai.qq.com/doc/facemerge.shtml
   * @param {String} image 待处理图片 原始图片的base64编码数据（原图大小上限500KB）
   * @param {Number} model 默认素材模板编码见下文描述 取值区间[1-50]；自定义素材模板可在应用详情页上传和查询
   *
   * @return {Promise} A Promise Object
   * @deprecated Not Available on 2018-11-30
   */
  facemerge(image, model) {
    if (image && Buffer.byteLength(image, 'base64') >= 500 * 1024) {
      return error('image 不能为空且大小小于500Kb');
    }
    if (model && model < 1 && model > 50) {
      return error('model 不能为空且取值区间为[1-50]');
    }
    return Request.request(
      URIS.facemerge,
      this.appKey,
      Object.assign({}, commonParams(), {
        app_id: this.appId,
        image: image,
        model: model,
      }),
    );
  }

  /**
   * 大头贴
   *
   * 大头贴接口提供大头贴特效功能，可以帮您快速实现原始图片的大头贴特效处理。
   *
   * @see https://ai.qq.com/doc/facesticker.shtml
   * @param {String} image 待处理图片 原始图片的base64编码数据（原图大小上限500KB）
   * @param {Number} sticker 大头贴编码 取值区间[1-31]
   *
   * @return {Promise} A Promise Object
   */
  facesticker(image, sticker) {
    if (image && Buffer.byteLength(image, 'base64') >= 500 * 1024) {
      return error('image 不能为空 且 大小小于500Kb');
    }
    if (sticker && sticker < 1 && sticker > 32) {
      return error('model 不能为空且取值区间为[1-31]');
    }
    return Request.request(
      URIS.facesticker,
      this.appKey,
      Object.assign({}, commonParams(), {
        app_id: this.appId,
        image: image,
        sticker: sticker,
      }),
    );
  }

  /**
   * 颜龄检测
   *
   * 颜龄检测接口提供颜龄检测功能，可以帮您快速实现原始图片的颜龄检测处理。
   *
   * @see https://ai.qq.com/doc/faceage.shtml
   * @param {String} image 待处理图片 原始图片的base64编码数据（原图大小上限500KB）
   *
   * @return {Promise} A Promise Object
   */
  faceage(image) {
    if (image && Buffer.byteLength(image, 'base64') >= 500 * 1024) {
      return error('image 不能为空 且 大小小于500Kb');
    }
    return Request.request(
      URIS.faceage,
      this.appKey,
      Object.assign({}, commonParams(), {
        app_id: this.appId,
        image: image,
      }),
    );
  }
}