/**
 * 跨境电商PC端《消费者告知书》弹窗提示 依赖于jQuery
 */
$(document).ready(function () {
    if (!localStorage.getItem('CROSS-BORDER-NOTICE')) {
        $('body').append(`<div
      style="
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 1050;
        overflow: auto;
        margin: 0;
        padding: 0;
        background-color: rgba(0, 0, 0, .5);
      "
    id="coss-border-panel">
      <div
        style="
          width: 600px;
          background-color: white;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: fixed;
          left: 50%;
          top: 50%;
          transform: translate3d(-50%, -50%, 0);
        "
      >
        <h1>《消费者告知书》</h1>
        <div>
          <p>尊敬的客户：</p>
          <p>
            您好！为帮助您更好地选购境外商品，请您在购买前务必认真、详细阅读并完全理解本告知书的全部内容，并对自身风险承担做出客观判断，同意本告知书内容后再下单购买：
          </p>
          <li>
            您在本网站上购买的境外商品等同于原产地直接销售商品，因此商品本身可能无中文标签，如果需要您可以通过网站查看相关商品标签中文翻译或联系客服。
          </li>
          <li>
            根据相关法律政策，您选购的境外商品仅限于个人自用，不得进行再次销售。
          </li>
          <li>
            您购买的境外商品符合原产地有关品质、健康、标识的相关标准，与我国产品标准或有所不同，由此可能造成的危害、损失或者其他风险，本网站不承担责任。
          </li>
          <li>
            您在本网站上购买境外商品时，需向中国海关进行申报和缴纳相应税费，因此在下单前需提供您的姓名和身份证号进行实名身份信息注册认证。
          </li>
        </div>
        <button
            onclick="onCrossBorderNoticeAgree()"
          style="
            padding: 10px;
            margin-top: 20px;
            background-color: #db0b0b;
            border-radius: 10px;
            box-shadow: none;
            border: 0;
            color: white;
            font-size: 20px;
          "
        >
          我已知晓
        </button>
      </div>
    </div>`)
    }
});

function onCrossBorderNoticeAgree() {
    $('#coss-border-panel').remove();
    localStorage.setItem('CROSS-BORDER-NOTICE', 'DONE')
}
