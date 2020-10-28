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
        define(['../../ApiClient', '../model/FtContract', '../model/Transaction'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../ApiClient'), require('./FtContract'), require('./NftContract'), require('./Transaction'))
    } else {
        // Browser globals (root is window)
        if (!root.TokenHistoryApi) {
            root.TokenHistoryApi = {}
        }
        root.TokenHistoryApi.TransferItem = factory(
            root.TokenHistoryApi.ApiClient,
            root.TokenHistoryApi.FtContract,
            root.TokenHistoryApi.NftContract,
            root.TokenHistoryApi.Transaction
        )
    }
})(this, function(ApiClient, FtContract, NftContract, Transaction) {
    /**
     * The TransferItem model module.
     * @module model/TransferItem
     * @version 0.7.0
     */

    /**
     * Constructs a new <code>TransferItem</code>.
     * @alias module:model/TransferItem
     * @class
     */
    const TransferItem = function() {}

    /**
     * Constructs a <code>TransferItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransferItem} obj Optional instance to populate.
     * @return {module:model/TransferItem} The populated <code>TransferItem</code> instance.
     */
    TransferItem.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new TransferItem()
            if (data.hasOwnProperty('feePayer')) obj.feePayer = ApiClient.convertToType(data.feePayer, 'String')
            if (data.hasOwnProperty('feeRatio')) obj.feeRatio = ApiClient.convertToType(data.feeRatio, 'Number')
            if (data.hasOwnProperty('fee')) obj.fee = ApiClient.convertToType(data.fee, 'String')
            if (data.hasOwnProperty('from')) obj.from = ApiClient.convertToType(data.from, 'String')
            if (data.hasOwnProperty('to')) obj.to = ApiClient.convertToType(data.to, 'String')
            if (data.hasOwnProperty('transactionHash')) obj.transactionHash = ApiClient.convertToType(data.transactionHash, 'String')
            if (data.hasOwnProperty('transactionIndex')) obj.transactionIndex = ApiClient.convertToType(data.transactionIndex, 'Number')
            if (data.hasOwnProperty('transferType')) obj.transferType = ApiClient.convertToType(data.transferType, 'String')
            if (data.hasOwnProperty('typeInt')) obj.typeInt = ApiClient.convertToType(data.typeInt, 'Number')
            if (data.hasOwnProperty('value')) obj.value = ApiClient.convertToType(data.value, 'String')

            if (data.hasOwnProperty('contract')) {
                switch (data.transferType) {
                    case 'nft':
                        obj.contract = NftContract.constructFromObject(data.contract)
                        break
                    case 'ft':
                        obj.contract = FtContract.constructFromObject(data.contract)
                        break
                    default:
                        throw new Error(`Not supported trasnfer type: ${data.transferType}`)
                }
            }
            if (data.hasOwnProperty('formattedValue')) obj.formattedValue = ApiClient.convertToType(data.formattedValue, 'String')
            if (data.hasOwnProperty('transaction')) obj.transaction = Transaction.constructFromObject(data.transaction)
            if (data.hasOwnProperty('tokenId')) obj.tokenId = ApiClient.convertToType(data.tokenId, 'String')
        }
        return obj
    }

    /**
     * 수수료 대납 계정 주소 (20-byte)
     * @member {String} feePayer
     */
    TransferItem.prototype.feePayer = undefined

    /**
     * 수수료 대납 비율
     * @member {Number} feeRatio
     */
    TransferItem.prototype.feeRatio = undefined

    /**
     * 가스비
     * @member {String} fee
     */
    TransferItem.prototype.fee = undefined

    /**
     * 보낸 사람 EOA (20-byte)
     * @member {String} from
     */
    TransferItem.prototype.from = undefined

    /**
     * 받은 사람 EOA (20-byte)
     * @member {String} to
     */
    TransferItem.prototype.to = undefined

    /**
     * 트랜잭션 해시
     * @member {String} transactionHash
     */
    TransferItem.prototype.transactionHash = undefined

    /**
     * 트랜잭션 인덱스
     * @member {Number} transactionIndex
     */
    TransferItem.prototype.transactionIndex = undefined

    /**
     * 거래내역 유형
     * @member {String} transferType
     */
    TransferItem.prototype.transferType = undefined

    /**
     * 트랜잭션 유형
     * @member {Number} typeInt
     */
    TransferItem.prototype.typeInt = undefined

    /**
     * KLAY 전송량 (16진수)
     * @member {String} value
     */
    TransferItem.prototype.value = undefined

    /**
     * @member {module:model/FtContract} contract
     */
    TransferItem.prototype.contract = undefined

    /**
     * decimal을 적용한 변환값
     * @member {String} formattedValue
     */
    TransferItem.prototype.formattedValue = undefined

    /**
     * @member {module:model/Transaction} transaction
     */
    TransferItem.prototype.transaction = undefined

    /**
     * 토큰 식별자 (16진수)
     * @member {String} tokenId
     */
    TransferItem.prototype.tokenId = undefined

    return TransferItem
})
