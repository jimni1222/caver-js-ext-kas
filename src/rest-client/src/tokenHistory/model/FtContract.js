/*
 * Token History API
 * # Introduction  Token History API는 KLAY, FT (KIP-7, Labeled ERC-20), NFT (KIP-17, Labeled ERC-721) 토큰 정보, 이들 토큰을 주고받은 기록을 조회하는 기능을 제공합니다. 여러분은 특정 EOA가 KLAY를 주고받은 기록을 확인하거나 EOA가 가지고 있는 NFT 정보를 불러오는 등 Token History API를 다양하게 활용할 수 있습니다.   Token History API 사용에 관한 자세한 내용은 [튜토리얼](https://klaytn.com)을 확인하십시오.   이 문서 혹은 KAS에 관한 문의는 [개발자 포럼](https://forum.klaytn.com/)을 방문해 도움을 받으십시오
 *
 * OpenAPI spec version: 0.7.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../ApiClient'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../ApiClient'))
    } else {
        // Browser globals (root is window)
        if (!root.TokenHistoryApi) {
            root.TokenHistoryApi = {}
        }
        root.TokenHistoryApi.FtContract = factory(root.TokenHistoryApi.ApiClient)
    }
})(this, function(ApiClient) {
    /**
     * The FtContract model module.
     * @module model/FtContract
     * @version 0.7.0
     */

    /**
     * Constructs a new <code>FtContract</code>.
     * @alias module:model/FtContract
     * @class
     * @param address {String} 컨트랙트 주소 (20-byte)
     * @param decimals {Number} 토큰 자릿수
     * @param name {String} 토큰 이름
     * @param symbol {String} 토큰 심볼
     * @param status {String} 컨트랙트 라벨링 상태 (completed, processing, failed, cancelled)
     */
    const FtContract = function(address, decimals, name, symbol, status) {
        this.address = address
        this.decimals = decimals
        this.name = name
        this.symbol = symbol
        this.status = status
    }

    /**
     * Constructs a <code>FtContract</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FtContract} obj Optional instance to populate.
     * @return {module:model/FtContract} The populated <code>FtContract</code> instance.
     */
    FtContract.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new FtContract()
            if (data.hasOwnProperty('address')) obj.address = ApiClient.convertToType(data.address, 'String')
            if (data.hasOwnProperty('decimals')) obj.decimals = ApiClient.convertToType(data.decimals, 'Number')
            if (data.hasOwnProperty('name')) obj.name = ApiClient.convertToType(data.name, 'String')
            if (data.hasOwnProperty('symbol')) obj.symbol = ApiClient.convertToType(data.symbol, 'String')
            if (data.hasOwnProperty('status')) obj.status = ApiClient.convertToType(data.status, 'String')
        }
        return obj
    }

    /**
     * 컨트랙트 주소 (20-byte)
     * @member {String} address
     */
    FtContract.prototype.address = undefined

    /**
     * 토큰 자릿수
     * @member {Number} decimals
     */
    FtContract.prototype.decimals = undefined

    /**
     * 토큰 이름
     * @member {String} name
     */
    FtContract.prototype.name = undefined

    /**
     * 토큰 심볼
     * @member {String} symbol
     */
    FtContract.prototype.symbol = undefined

    /**
     * 컨트랙트 라벨링 상태 (completed, processing, failed, cancelled)
     * @member {String} status
     */
    FtContract.prototype.status = undefined

    return FtContract
})
