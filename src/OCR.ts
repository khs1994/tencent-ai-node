import AbstractTencentAI from './AbstractTencentAI';
import { URIS, commonParams, error } from './util/index';
import Request from './client/Request';

export default class OCR extends AbstractTencentAI {
  /**
   * OCR 服务类
   *
   * @method idcardocr(imageBase64String, type) 身份证OCR识别
   * @method bcocr(imageBase64String) 名片OCR识别
   * @method driverlicenseocr(imageBase64String, type) 行驶证驾驶证OCR识别
   * @method bizlicenseocr(imageBase64String) 营业执照OCR识别
   * @method creditcardocr(imageBase64String) 银行卡OCR识别
   * @method generalocr(imageBase64String) 通用OCR识别
   * @method plateocr(imageBase64String) 车牌识别
   * @method handwritingocr(imageBase64String) 手写体识别
   */

  /**
   * 身份证 OCR 识别
   *
   * 根据用户上传的包含身份证正反面照片，识别并且获取证件姓名、性别、民族、出生日期、地址、身份证号、证件有效期、发证机关等详细的身份证信息，并且可以返回精确剪裁对齐后的身份证正反面图片。
   *
   * @see https://ai.qq.com/doc/ocridcardocr.shtml
   * @param {String} imageBase64String  待识别图片 原始图片的base64编码数据（原图大小上限1MB，支持JPG、PNG、BMP格式）
   * @param {Number} card_type  身份证图片类型，0-正面，1-反面
   *
   * @return {Promise} A Promise Object
   */
  idcardocr(imageBase64String, card_type = 0) {
    if (
      imageBase64String &&
      Buffer.byteLength(imageBase64String, 'base64') < 1048576
    ) {
      return Request.request(
        URIS.idcardocr,
        this.appKey,
        Object.assign({}, commonParams(), {
          app_id: this.appId,
          image: imageBase64String,
          card_type: card_type,
        }),
      );
    } else {
      return error('imageBase64String 不能为空 且 大小小于1M');
    }
  }

  /**
   * 名片 OCR 识别
   *
   * 根据用户上传的名片图像，返回识别出的名片字段信息，目前已支持20多个字段识别（姓名、英文姓名、职位、英文职位、部门、英文部门、公司、英文公司、地址、英文地址、邮编、邮箱、网址、手机、电话、传真、QQ、MSN、微信、微博、公司账号、logo、其他）
   *
   * @see https://ai.qq.com/doc/ocrbcocr.shtml
   * @param {String} imageBase64String  待识别图片 原始图片的base64编码数据（原图大小上限1MB，支持JPG、PNG、BMP格式）
   *
   * @return {Promise} A Promise Object
   */
  bcocr(imageBase64String) {
    if (
      imageBase64String &&
      Buffer.byteLength(imageBase64String, 'base64') < 1048576
    ) {
      return Request.request(
        URIS.bcocr,
        this.appKey,
        Object.assign({}, commonParams(), {
          app_id: this.appId,
          image: imageBase64String,
        }),
      );
    } else {
      return error('imageBase64String 不能为空 且 大小小于1M');
    }
  }

  /**
   * 行驶证驾驶证 OCR 识别
   *
   * 根据用户上传的图像，返回识别出行驶证&驾驶证各字段信息。（行驶证支持字段：车牌号码、车辆类型、所有人、住址、使用性质、品牌型号、识别代码、发动机号、注册日期、发证日期；驾驶证支持字段：证号、姓名、性别、国籍、住址、出生日期、领证日期、准驾车型、起始日期、有效日期）
   *
   * @see https://ai.qq.com/doc/ocrdriverlicenseocr.shtml
   * @param {String} imageBase64String 待识别图片 原始图片的base64编码数据（原图大小上限1MB，支持JPG、PNG、BMP格式）
   * @param {Number} type  识别类型，0-行驶证识别，1-驾驶证识别
   *
   * @return {Promise} A Promise Object
   */
  driverlicenseocr(imageBase64String, type = 1) {
    if (
      imageBase64String &&
      Buffer.byteLength(imageBase64String, 'base64') < 1048576
    ) {
      return Request.request(
        URIS.driverlicenseocr,
        this.appKey,
        Object.assign({}, commonParams(), {
          app_id: this.appId,
          image: imageBase64String,
          type: type,
        }),
      );
    } else {
      return error('imageBase64String 不能为空 且 大小小于1M');
    }
  }

  /**
   * 通用 OCR 识别
   *
   * 根据用户上传的图像，返回识别出的字段信息
   *
   * @see https://ai.qq.com/doc/ocrgeneralocr.shtml
   * @param {String} imageBase64String 待识别图片 原始图片的base64编码数据（原图大小上限1MB，支持JPG、PNG、BMP格式）
   *
   * @return {Promise} A Promise Object
   */
  generalocr(imageBase64String) {
    if (
      imageBase64String &&
      Buffer.byteLength(imageBase64String, 'base64') < 1048576
    ) {
      return Request.request(
        URIS.generalocr,
        this.appKey,
        Object.assign({}, commonParams(), {
          app_id: this.appId,
          image: imageBase64String,
        }),
      );
    } else {
      return error('imageBase64String 不能为空 且 大小小于1M');
    }
  }

  /**
   * 营业执照 OCR 识别
   *
   * 营业执照OCR 识别，根据用户上传的营业执照图像，返回识别出的注册号、公司名称、地址字段信息。
   *
   * @see https://ai.qq.com/doc/ocrbizlicenseocr.shtml
   * @param {String} imageBase64String 待识别图片 原始图片的base64编码数据（原图大小上限1MB，支持JPG、PNG、BMP格式）
   *
   * @return {Promise} A Promise Object
   */
  bizlicenseocr(imageBase64String) {
    if (
      imageBase64String &&
      Buffer.byteLength(imageBase64String, 'base64') < 1048576
    ) {
      return Request.request(
        URIS.bizlicenseocr,
        this.appKey,
        Object.assign({}, commonParams(), {
          app_id: this.appId,
          image: imageBase64String,
        }),
      );
    } else {
      return error('imageBase64String 不能为空 且 大小小于1M');
    }
  }

  /**
   * 银行卡 OCR 识别
   *
   * 根据用户上传的银行卡图像，返回识别出的银行卡字段信息
   *
   * @see https://ai.qq.com/doc/ocrcreditcardocr.shtml
   * @param {String} imageBase64String 待识别图片 原始图片的base64编码数据（原图大小上限1MB，支持JPG、PNG、BMP格式）
   *
   * @return {Promise} A Promise Object
   */
  creditcardocr(imageBase64String) {
    if (
      imageBase64String &&
      Buffer.byteLength(imageBase64String, 'base64') < 1048576
    ) {
      return Request.request(
        URIS.creditcardocr,
        this.appKey,
        Object.assign({}, commonParams(), {
          app_id: this.appId,
          image: imageBase64String,
        }),
      );
    } else {
      return error('imageBase64String 不能为空 且 大小小于1M');
    }
  }

  /**
   * 车牌 OCR
   *
   * 识别车牌上面的字段信息
   *
   * @see https://ai.qq.com/doc/plateocr.shtml
   * @param {String} imageBase64String 待识别图片或者待识别图片URI地址 原始图片的base64编码数据（原图大小上限1MB，支持JPG、PNG、BMP格式）
   *
   * @return {Promise} A Promise Object
   */
  plateocr(imageBase64String) {
    if (
      imageBase64String &&
      /^http\S*[.jpg|.bmp|.png]$/g.test(imageBase64String)
    ) {
      return Request.request(
        URIS.plateocr,
        this.appKey,
        Object.assign({}, commonParams(), {
          app_id: this.appId,
          image_url: imageBase64String,
        }),
      );
    } else if (
      imageBase64String &&
      Buffer.byteLength(imageBase64String, 'base64') < 1048576
    ) {
      return Request.request(
        URIS.plateocr,
        this.appKey,
        Object.assign({}, commonParams(), {
          app_id: this.appId,
          image: imageBase64String,
        }),
      );
    } else {
      return error('image 不能为空 且 大小小于1M 或者不是正常的图片地址');
    }
  }

  /**
   * 手写体 OCR
   *
   * 检测和识别图像上面手写体的字段信息
   *
   * @see https://ai.qq.com/doc/handwritingocr.shtml
   * @param {String} imageBase64String 待识别图片或者待识别图片URI地址 原始图片的base64编码数据（原图大小上限1MB，支持JPG、PNG、BMP格式）
   *
   * @return {Promise} A Promise Object
   */
  handwritingocr(imageBase64String) {
    if (
      imageBase64String &&
      /^http\S*[.jpg|.bmp|.png]$/g.test(imageBase64String)
    ) {
      return Request.request(
        URIS.handwritingocr,
        this.appKey,
        Object.assign({}, commonParams(), {
          app_id: this.appId,
          image_url: imageBase64String,
        }),
      );
    } else if (
      imageBase64String &&
      Buffer.byteLength(imageBase64String, 'base64') < 1048576
    ) {
      return Request.request(
        URIS.handwritingocr,
        this.appKey,
        Object.assign({}, commonParams(), {
          app_id: this.appId,
          image: imageBase64String,
        }),
      );
    } else {
      return error('image 不能为空 且 大小小于1M 或者不是正常的图片地址');
    }
  }
}