<template>
  <div class="total">
    <div class="status_bar"></div>

    <div class="return_label">
      <div
        @click="backTolast"
        style="display: inline-block; width: 40px; height: 100%"
      >
        <svg
          transform="translate(13,16)"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="9.70001220703125"
          height="14.89013671875"
          viewBox="0 0 9.70001220703125 14.89013671875"
          fill="none"
        >
          <path
            id="路径 1"
            style="fill: #007994; opacity: 1"
            d="M8.05786,14.6566l-7.7,-6.45001c-0.05033,-0.04217 -0.09607,-0.08884 -0.13721,-0.14001c-0.04114,-0.05117 -0.0769,-0.10587 -0.10727,-0.16408c-0.03037,-0.05822 -0.05477,-0.11884 -0.07319,-0.18186c-0.01843,-0.06303 -0.03053,-0.12724 -0.03631,-0.19264c-0.00578,-0.06541 -0.00512,-0.13075 0.00197,-0.19603c0.00709,-0.06527 0.02049,-0.12923 0.04018,-0.19187c0.01969,-0.06264 0.0453,-0.12276 0.07684,-0.18035c0.03153,-0.05759 0.06838,-0.11156 0.11055,-0.16189c0.03798,-0.04535 0.07966,-0.08699 0.12503,-0.12494l7.7,-6.44c0.05037,-0.04213 0.10436,-0.07893 0.16198,-0.11042c0.05762,-0.03149 0.11776,-0.05706 0.18041,-0.0767c0.06265,-0.01964 0.12662,-0.03299 0.1919,-0.04003c0.06528,-0.00704 0.13062,-0.00765 0.19603,-0.00182c0.0654,0.00583 0.1296,0.01798 0.19261,0.03645c0.06301,0.01848 0.12361,0.04292 0.1818,0.07333c0.05819,0.03041 0.11286,0.06621 0.164,0.10739c0.05115,0.04118 0.09778,0.08695 0.13991,0.13732c0.04212,0.05037 0.07893,0.10436 0.11042,0.16198c0.03149,0.05762 0.05705,0.11775 0.0767,0.18041c0.01964,0.06265 0.03298,0.12662 0.04003,0.1919c0.00704,0.06528 0.00765,0.13062 0.00182,0.19603c-0.00583,0.0654 -0.01798,0.1296 -0.03645,0.19261c-0.01848,0.06301 -0.04293,0.12361 -0.07334,0.1818c-0.03041,0.05819 -0.0662,0.11286 -0.10739,0.16401c-0.04118,0.05114 -0.08695,0.09777 -0.13732,0.1399l-7.69999,6.44l-0.64156,-0.76708l0.64214,-0.76659l7.7,6.44999c0.05033,0.0422 0.09607,0.08887 0.13721,0.14c0.04115,0.0512 0.0769,0.1059 0.10727,0.1641c0.03037,0.0582 0.05476,0.11883 0.07319,0.1819c0.01843,0.063 0.03053,0.1272 0.03631,0.1926c0.00577,0.0654 0.00511,0.13073 -0.00198,0.196c-0.00709,0.06527 -0.02048,0.12923 -0.04017,0.1919c-0.01969,0.06267 -0.04531,0.12277 -0.07684,0.1803c-0.03153,0.0576 -0.06838,0.11157 -0.11054,0.1619c-0.04217,0.05033 -0.08884,0.0961 -0.14001,0.1373c-0.05117,0.04113 -0.10587,0.07687 -0.16409,0.1072c-0.05821,0.0304 -0.11883,0.0548 -0.18185,0.0732c-0.06303,0.01847 -0.12724,0.03057 -0.19264,0.0363c-0.06541,0.0058 -0.13075,0.00513 -0.19603,-0.002c-0.06527,-0.00707 -0.12923,-0.02043 -0.19187,-0.0401c-0.06264,-0.01973 -0.12276,-0.04537 -0.18035,-0.0769c-0.05759,-0.03153 -0.11156,-0.06837 -0.16189,-0.1105z"
          ></path>
        </svg>
      </div>
      <div style="display: inline-block">
        <center>
          <span
            style="
              font-size: 16px;
              font-weight: 700;
              letter-spacing: 0px;
              color: rgba(0, 87, 107, 0.67);
              position: absolute;
              top: 50%;
              left: 0;
              right: 0;
              transform: translateY(-50%);
            "
          >
            帖子内容
          </span>
        </center>
      </div>
    </div>

    <div class="user_label">
      <!-- <div class="headPortrait"></div> --><!--预设头像？-->
      <img :src="passageData.img" alt="" class="headPortrait" />
      <div style="width: 230px">
        <div
          style="
            display: inline-block;
            position: relative;
            width: 130px;
            height: 100%;
          "
        >
          <span
            style="
              font-size: 16px;
              font-weight: 400;
              letter-spacing: 0px;
              color: rgba(0, 0, 0, 1);
              position: relative;
            "
          >
            {{ passageData.name }}
          </span>
          <svg
            v-if="isVip"
            transform="translate(0,3)"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <g opacity="1" transform="translate(0 0)  rotate(0)">
              <mask id="bg-mask-0" fill="white">
                <use
                  transform="translate(0 0)  rotate(NaN)"
                  xlink:href="#path_0"
                ></use>
              </mask>
              <g mask="url(#bg-mask-0)">
                <path
                  id="路径 1"
                  style="fill: #eb9c00; opacity: 1"
                  d="M15.8333,9c0,-0.92651 -0.17897,-1.81272 -0.5369,-2.65862c-0.34593,-0.81739 -0.83437,-1.54155 -1.4653,-2.17248c-0.63093,-0.63092 -1.3551,-1.11934 -2.1725,-1.46526c-0.84587,-0.35798 -1.73207,-0.53697 -2.65861,-0.53697c-0.92651,0 -1.81271,0.17899 -2.65861,0.53697c-0.81739,0.34592 -1.54155,0.83434 -2.17248,1.46526c-0.63092,0.63093 -1.11934,1.35509 -1.46526,2.17249c-0.35798,0.84589 -0.53697,1.7321 -0.53697,2.65861c0,0.92653 0.17899,1.81273 0.53697,2.6586c0.34592,0.8174 0.83434,1.54157 1.46526,2.1725c0.63093,0.63093 1.35509,1.11937 2.17248,1.4653c0.8459,0.35793 1.73211,0.5369 2.65862,0.5369c0.92653,0 1.81273,-0.17897 2.6586,-0.5369c0.8174,-0.34593 1.54157,-0.83437 2.1725,-1.4653c0.63093,-0.63093 1.11937,-1.3551 1.4653,-2.1725c0.35793,-0.84587 0.5369,-1.73207 0.5369,-2.6586zM17.1667,9c0,1.10687 -0.21413,2.1663 -0.6424,3.1783c-0.41347,0.97693 -0.99693,1.84213 -1.7504,2.5956c-0.75347,0.75347 -1.61867,1.33693 -2.5956,1.7504c-1.012,0.42827 -2.07143,0.6424 -3.1783,0.6424c-1.10686,0 -2.16628,-0.21413 -3.17826,-0.6424c-0.97697,-0.41347 -1.84219,-0.99693 -2.59565,-1.7504c-0.75345,-0.75347 -1.3369,-1.61867 -1.75035,-2.5956c-0.42827,-1.012 -0.64241,-2.07143 -0.64241,-3.1783c0,-1.10686 0.21414,-2.16628 0.64241,-3.17826c0.41345,-0.97698 0.9969,-1.84219 1.75035,-2.59564c0.75345,-0.75345 1.61867,-1.33691 2.59565,-1.75036c1.01198,-0.42827 2.0714,-0.64241 3.17825,-0.64241c1.10687,0 2.16631,0.21414 3.17831,0.64241c0.97693,0.41345 1.84213,0.99691 2.5956,1.75036c0.75347,0.75345 1.33693,1.61866 1.7504,2.59564c0.42827,1.01198 0.6424,2.0714 0.6424,3.17826z"
                ></path>
                <path
                  id="路径 2"
                  style="fill: #ebc400; opacity: 1"
                  d="M12.4583,10.875v-3.75h0.6667l0.2971,0.59681l-2.25,1.12c-0.0352,0.01751 -0.07163,0.03179 -0.1093,0.04285c-0.03767,0.01107 -0.07603,0.01874 -0.1151,0.02303c-0.039,0.00428 -0.0781,0.00511 -0.1173,0.00248c-0.0392,-0.00263 -0.07787,-0.00867 -0.116,-0.01813c-0.03813,-0.00946 -0.07513,-0.02219 -0.111,-0.03819c-0.03587,-0.016 -0.07003,-0.03502 -0.1025,-0.05706c-0.03253,-0.02204 -0.06287,-0.04676 -0.091,-0.07416c-0.02813,-0.0274 -0.05367,-0.05706 -0.0766,-0.08897l-1.87995,-2.62l0.54165,-0.38866l0.54263,0.3873l-1.87,2.62c-0.02286,0.03202 -0.04835,0.06179 -0.07648,0.0893c-0.02813,0.02751 -0.05846,0.05234 -0.09098,0.07448c-0.03253,0.02215 -0.06674,0.04126 -0.10265,0.05734c-0.03591,0.01609 -0.07295,0.02889 -0.11113,0.03842c-0.03817,0.00952 -0.07689,0.01562 -0.11614,0.01829c-0.03926,0.00267 -0.07845,0.00187 -0.11756,-0.0024c-0.03911,-0.00427 -0.07755,-0.01194 -0.1153,-0.02301c-0.03776,-0.01107 -0.07425,-0.02538 -0.10947,-0.04291l-2.25,-1.12l0.29708,-0.59681h0.66667v3.75h-0.66667v-0.6667h8.25v0.6667zM13.7917,10.875c0,0.0438 -0.00427,0.08717 -0.0128,0.1301c-0.0086,0.04293 -0.02127,0.0846 -0.038,0.125c-0.01673,0.04047 -0.03727,0.0789 -0.0616,0.1153c-0.02433,0.0364 -0.05197,0.07007 -0.0829,0.101c-0.03093,0.03093 -0.0646,0.05857 -0.101,0.0829c-0.0364,0.02433 -0.07483,0.04487 -0.1153,0.0616c-0.0404,0.01673 -0.08207,0.0294 -0.125,0.038c-0.04293,0.00853 -0.0863,0.0128 -0.1301,0.0128h-8.25c-0.04377,0 -0.08713,-0.00427 -0.13006,-0.0128c-0.04293,-0.0086 -0.08462,-0.02127 -0.12506,-0.038c-0.04045,-0.01673 -0.07887,-0.03727 -0.11526,-0.0616c-0.0364,-0.02433 -0.07007,-0.05197 -0.10102,-0.0829c-0.03095,-0.03093 -0.05859,-0.0646 -0.08291,-0.101c-0.02432,-0.0364 -0.04486,-0.07483 -0.06161,-0.1153c-0.01675,-0.0404 -0.0294,-0.08207 -0.03794,-0.125c-0.00854,-0.04293 -0.01281,-0.0863 -0.01281,-0.1301v-3.75c0,-0.1045 0.02329,-0.20353 0.06986,-0.29708c0.01951,-0.03919 0.04265,-0.0761 0.06942,-0.11073c0.02678,-0.03463 0.05668,-0.06631 0.08969,-0.09505c0.03302,-0.02874 0.06853,-0.05398 0.10652,-0.07573c0.03799,-0.02175 0.07773,-0.03958 0.11924,-0.05349c0.0415,-0.01392 0.08396,-0.02365 0.12738,-0.0292c0.04342,-0.00555 0.08697,-0.00682 0.13064,-0.00379c0.04367,0.00302 0.08662,0.01028 0.12886,0.02177c0.04224,0.01149 0.08295,0.02698 0.12214,0.04649l2.25,1.12l-0.29708,0.59681l-0.54263,-0.3873l1.87,-2.62c0.04279,-0.05995 0.09411,-0.1114 0.15396,-0.15435c0.03557,-0.02552 0.07328,-0.04733 0.11314,-0.06542c0.03986,-0.01809 0.0811,-0.03211 0.12373,-0.04208c0.04263,-0.00997 0.08581,-0.01569 0.12956,-0.01715c0.04375,-0.00146 0.08722,0.00136 0.13042,0.00847c0.04319,0.0071 0.08527,0.01835 0.12625,0.03374c0.04098,0.01539 0.08006,0.03464 0.11725,0.05773c0.03719,0.02309 0.07176,0.04959 0.10373,0.07949c0.03197,0.02991 0.06072,0.06264 0.08624,0.09821l1.87995,2.61999l-0.5416,0.38867l-0.2971,-0.59681l2.25,-1.12c0.09353,-0.04657 0.19257,-0.06986 0.2971,-0.06986c0.0438,0 0.08717,0.00427 0.1301,0.01281c0.04293,0.00854 0.0846,0.02119 0.125,0.03794c0.04047,0.01675 0.0789,0.03729 0.1153,0.06161c0.0364,0.02432 0.07007,0.05195 0.101,0.0829c0.03093,0.03095 0.05857,0.06463 0.0829,0.10103c0.02433,0.03639 0.04487,0.07481 0.0616,0.11526c0.01673,0.04044 0.0294,0.08213 0.038,0.12506c0.00853,0.04293 0.0128,0.08629 0.0128,0.13006z"
                ></path>
              </g>
            </g>
            <defs>
              <rect id="path_0" x="0" y="0" width="18" height="18" />
            </defs>
          </svg>
        </div>
      </div>
      <div>
        <button
          @click="click_follow"
          style="
            border: none;
            border-radius: 7px;
            background-color: rgba(0, 121, 148, 1);
            font-size: 12px;
            font-weight: 900;
            color: rgba(255, 255, 255, 1);
            width: 46px;
            height: 23px;
            border-radius: 10px;
            text-shadow: 0px 0px 10px white;
          "
        >
          关注
        </button>
      </div>
      <!-- <div class="follow_button">
                <svg style="position: absolute; z-index: 9998;" transform="translate(0,10)"
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="46" height="23"
                    viewBox="0 0 46 23" fill="none">
                    <path id="关注键" fill-rule="evenodd" style="fill:#007994" opacity="1"
                        d="M10 23L36 23C41.52 23 46 18.52 46 13L46 10C46 4.48 41.52 0 36 0L10 0C4.48 0 0 4.48 0 10L0 13C0 18.52 4.48 23 10 23Z">
                    </path>
                </svg>
                <span @click="click_follow" style="position: relative; z-index: 10002; font-size: 12px;
                                                font-weight: 900; color: rgba(255, 255, 255, 1);
                                                top: 11px; left: 11px;">
                    关注
                </span>
            </div> -->
    </div>

    <div class="content">
      <div
        style="
          height: auto;
          width: 100%;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          background: white;
          margin-bottom: 10px;
        "
      >
        <h2
          style="
            margin-left: 10px;
            margin-right: 10px;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: 0px;
            line-height: 28.13px;
            color: rgba(0, 0, 0, 0.9);
            text-align: left;
            vertical-align: top;
          "
        >
          {{ passageData.title }}
        </h2>
        <p
          style="
            margin: 20px;
            font-size: 14px;
            font-weight: 400;
            letter-spacing: 0.3px;
            line-height: 20px;
            color: rgba(0, 0, 0, 1);
            text-align: left;
            vertical-align: top;
          "
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ passageData.description }}
        </p>
        <img
          v-if="passageData.image"
          style="
            max-width: 90%;
            height: auto;
            margin-left: 20px;
            margin-right: 20px;
            margin-bottom: 20px;
          "
          :src="passageData.image"
          alt="image1"
        />
        <div
          class="tags"
          style="
            display: inline-block;
            width: auto;
            height: 18px;
            background: rgba(83, 204, 238, 0.42);
            margin-left: 20px;
            margin-bottom: 8px;
            font-size: 14px;
          "
          v-for="(tag, index) in passageData.tag"
          :key="index"
        >
          &nbsp;#{{ tag }}&nbsp;
        </div>
        <div
          style="
            font-size: 12px;
            color: rgba(144, 151, 153);
            margin-bottom: 16px;
          "
        >
          <div style="float: left; margin-left: 20px">
            发布于{{ passageData.time }}
          </div>
          <div style="float: right; margin-right: 20px">
            浏览量{{ passageData.pageView }}
          </div>
        </div>
      </div>
      <div
        class="userComment"
        style="
          margin: 0px;
          padding: 0px;
          width: 100%;
          height: auto;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        "
      >
        <h3 style="float: left; padding: 14px">评论</h3>
        <div
          class="commentItem"
          style="width: 100%; height: auto"
          v-for="comment in passageData.comment"
          :key="comment.id"
        >
          <div
            style="
              display: inline-block;
              width: 40px;
              height: 40px;
              background-color: #007994;
              margin-left: 20px;
              border-radius: 50%;
            "
          ></div>
          <div
            style="
              display: inline-block;
              vertical-align: top;
              text-align: left;
              margin-left: 10px;
              width: 280px;
              overflow: wrap;
            "
          >
            <div
              style="
                display: inline-block;
                margin-top: 5px;
                margin-bottom: 5px;
                width: 100%;
              "
            >
              <strong
                ><span style="text-align: left; font-size: 14px">
                  {{ comment.name }}
                </span></strong
              >
              <svg
                v-if="comment.isVip"
                transform="translate(10,5)"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g opacity="1" transform="translate(0 0)  rotate(0)">
                  <mask id="bg-mask-0" fill="white">
                    <use
                      transform="translate(0 0)  rotate(NaN)"
                      xlink:href="#path_0"
                    ></use>
                  </mask>
                  <g mask="url(#bg-mask-0)">
                    <path
                      id="路径 1"
                      style="fill: #eb9c00; opacity: 1"
                      d="M15.8333,9c0,-0.92651 -0.17897,-1.81272 -0.5369,-2.65862c-0.34593,-0.81739 -0.83437,-1.54155 -1.4653,-2.17248c-0.63093,-0.63092 -1.3551,-1.11934 -2.1725,-1.46526c-0.84587,-0.35798 -1.73207,-0.53697 -2.65861,-0.53697c-0.92651,0 -1.81271,0.17899 -2.65861,0.53697c-0.81739,0.34592 -1.54155,0.83434 -2.17248,1.46526c-0.63092,0.63093 -1.11934,1.35509 -1.46526,2.17249c-0.35798,0.84589 -0.53697,1.7321 -0.53697,2.65861c0,0.92653 0.17899,1.81273 0.53697,2.6586c0.34592,0.8174 0.83434,1.54157 1.46526,2.1725c0.63093,0.63093 1.35509,1.11937 2.17248,1.4653c0.8459,0.35793 1.73211,0.5369 2.65862,0.5369c0.92653,0 1.81273,-0.17897 2.6586,-0.5369c0.8174,-0.34593 1.54157,-0.83437 2.1725,-1.4653c0.63093,-0.63093 1.11937,-1.3551 1.4653,-2.1725c0.35793,-0.84587 0.5369,-1.73207 0.5369,-2.6586zM17.1667,9c0,1.10687 -0.21413,2.1663 -0.6424,3.1783c-0.41347,0.97693 -0.99693,1.84213 -1.7504,2.5956c-0.75347,0.75347 -1.61867,1.33693 -2.5956,1.7504c-1.012,0.42827 -2.07143,0.6424 -3.1783,0.6424c-1.10686,0 -2.16628,-0.21413 -3.17826,-0.6424c-0.97697,-0.41347 -1.84219,-0.99693 -2.59565,-1.7504c-0.75345,-0.75347 -1.3369,-1.61867 -1.75035,-2.5956c-0.42827,-1.012 -0.64241,-2.07143 -0.64241,-3.1783c0,-1.10686 0.21414,-2.16628 0.64241,-3.17826c0.41345,-0.97698 0.9969,-1.84219 1.75035,-2.59564c0.75345,-0.75345 1.61867,-1.33691 2.59565,-1.75036c1.01198,-0.42827 2.0714,-0.64241 3.17825,-0.64241c1.10687,0 2.16631,0.21414 3.17831,0.64241c0.97693,0.41345 1.84213,0.99691 2.5956,1.75036c0.75347,0.75345 1.33693,1.61866 1.7504,2.59564c0.42827,1.01198 0.6424,2.0714 0.6424,3.17826z"
                    ></path>
                    <path
                      id="路径 2"
                      style="fill: #ebc400; opacity: 1"
                      d="M12.4583,10.875v-3.75h0.6667l0.2971,0.59681l-2.25,1.12c-0.0352,0.01751 -0.07163,0.03179 -0.1093,0.04285c-0.03767,0.01107 -0.07603,0.01874 -0.1151,0.02303c-0.039,0.00428 -0.0781,0.00511 -0.1173,0.00248c-0.0392,-0.00263 -0.07787,-0.00867 -0.116,-0.01813c-0.03813,-0.00946 -0.07513,-0.02219 -0.111,-0.03819c-0.03587,-0.016 -0.07003,-0.03502 -0.1025,-0.05706c-0.03253,-0.02204 -0.06287,-0.04676 -0.091,-0.07416c-0.02813,-0.0274 -0.05367,-0.05706 -0.0766,-0.08897l-1.87995,-2.62l0.54165,-0.38866l0.54263,0.3873l-1.87,2.62c-0.02286,0.03202 -0.04835,0.06179 -0.07648,0.0893c-0.02813,0.02751 -0.05846,0.05234 -0.09098,0.07448c-0.03253,0.02215 -0.06674,0.04126 -0.10265,0.05734c-0.03591,0.01609 -0.07295,0.02889 -0.11113,0.03842c-0.03817,0.00952 -0.07689,0.01562 -0.11614,0.01829c-0.03926,0.00267 -0.07845,0.00187 -0.11756,-0.0024c-0.03911,-0.00427 -0.07755,-0.01194 -0.1153,-0.02301c-0.03776,-0.01107 -0.07425,-0.02538 -0.10947,-0.04291l-2.25,-1.12l0.29708,-0.59681h0.66667v3.75h-0.66667v-0.6667h8.25v0.6667zM13.7917,10.875c0,0.0438 -0.00427,0.08717 -0.0128,0.1301c-0.0086,0.04293 -0.02127,0.0846 -0.038,0.125c-0.01673,0.04047 -0.03727,0.0789 -0.0616,0.1153c-0.02433,0.0364 -0.05197,0.07007 -0.0829,0.101c-0.03093,0.03093 -0.0646,0.05857 -0.101,0.0829c-0.0364,0.02433 -0.07483,0.04487 -0.1153,0.0616c-0.0404,0.01673 -0.08207,0.0294 -0.125,0.038c-0.04293,0.00853 -0.0863,0.0128 -0.1301,0.0128h-8.25c-0.04377,0 -0.08713,-0.00427 -0.13006,-0.0128c-0.04293,-0.0086 -0.08462,-0.02127 -0.12506,-0.038c-0.04045,-0.01673 -0.07887,-0.03727 -0.11526,-0.0616c-0.0364,-0.02433 -0.07007,-0.05197 -0.10102,-0.0829c-0.03095,-0.03093 -0.05859,-0.0646 -0.08291,-0.101c-0.02432,-0.0364 -0.04486,-0.07483 -0.06161,-0.1153c-0.01675,-0.0404 -0.0294,-0.08207 -0.03794,-0.125c-0.00854,-0.04293 -0.01281,-0.0863 -0.01281,-0.1301v-3.75c0,-0.1045 0.02329,-0.20353 0.06986,-0.29708c0.01951,-0.03919 0.04265,-0.0761 0.06942,-0.11073c0.02678,-0.03463 0.05668,-0.06631 0.08969,-0.09505c0.03302,-0.02874 0.06853,-0.05398 0.10652,-0.07573c0.03799,-0.02175 0.07773,-0.03958 0.11924,-0.05349c0.0415,-0.01392 0.08396,-0.02365 0.12738,-0.0292c0.04342,-0.00555 0.08697,-0.00682 0.13064,-0.00379c0.04367,0.00302 0.08662,0.01028 0.12886,0.02177c0.04224,0.01149 0.08295,0.02698 0.12214,0.04649l2.25,1.12l-0.29708,0.59681l-0.54263,-0.3873l1.87,-2.62c0.04279,-0.05995 0.09411,-0.1114 0.15396,-0.15435c0.03557,-0.02552 0.07328,-0.04733 0.11314,-0.06542c0.03986,-0.01809 0.0811,-0.03211 0.12373,-0.04208c0.04263,-0.00997 0.08581,-0.01569 0.12956,-0.01715c0.04375,-0.00146 0.08722,0.00136 0.13042,0.00847c0.04319,0.0071 0.08527,0.01835 0.12625,0.03374c0.04098,0.01539 0.08006,0.03464 0.11725,0.05773c0.03719,0.02309 0.07176,0.04959 0.10373,0.07949c0.03197,0.02991 0.06072,0.06264 0.08624,0.09821l1.87995,2.61999l-0.5416,0.38867l-0.2971,-0.59681l2.25,-1.12c0.09353,-0.04657 0.19257,-0.06986 0.2971,-0.06986c0.0438,0 0.08717,0.00427 0.1301,0.01281c0.04293,0.00854 0.0846,0.02119 0.125,0.03794c0.04047,0.01675 0.0789,0.03729 0.1153,0.06161c0.0364,0.02432 0.07007,0.05195 0.101,0.0829c0.03093,0.03095 0.05857,0.06463 0.0829,0.10103c0.02433,0.03639 0.04487,0.07481 0.0616,0.11526c0.01673,0.04044 0.0294,0.08213 0.038,0.12506c0.00853,0.04293 0.0128,0.08629 0.0128,0.13006z"
                    ></path>
                  </g>
                </g>
                <defs>
                  <rect id="path_0" x="0" y="0" width="18" height="18" />
                </defs>
              </svg>
            </div>
            <div style="display: inline-block"></div>
            <p style="text-align: left; font-size: 12px; margin-bottom: 20px">
              {{ comment.content }}
            </p>
          </div>
          <div
            style="
              font-size: 12px;
              color: rgba(144, 151, 153);
              margin-bottom: 16px;
              margin-left: 20px;
            "
          >
            {{ comment.time }}
          </div>
          <hr
            style="
              margin-top: 10px;
              margin-bottom: 10px;
              width: 100%;
              border: 3px solid rgba(110, 120, 122, 0.1);
            "
          />
        </div>

        <div
          id="fakeComment"
          class="commentItem"
          style="width: 100%; height: auto"
        >
          <img
            src="https://th.bing.com/th/id/OIP.T0Ppgam0LCLqA85TCmNBKAAAAA?w=188&h=188&c=7&r=0&o=5&dpr=1.7&pid=1.7"
            style="
              display: inline-block;
              width: 40px;
              height: 40px;
              background-color: #007994;
              margin-left: 20px;
              border-radius: 50%;
            "
            alt=""
          />
          <div
            style="
              display: inline-block;
              vertical-align: top;
              text-align: left;
              margin-left: 10px;
              width: 280px;
              overflow: wrap;
            "
          >
            <div
              style="
                display: inline-block;
                margin-top: 5px;
                margin-bottom: 5px;
                width: 100%;
              "
            >
              <strong
                ><span style="text-align: left; font-size: 14px">
                  <!-- comment.name -->大牛
                </span></strong
              >
              <svg
                transform="translate(10,5)"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <g opacity="1" transform="translate(0 0)  rotate(0)">
                  <mask id="bg-mask-0" fill="white">
                    <use
                      transform="translate(0 0)  rotate(NaN)"
                      xlink:href="#path_0"
                    ></use>
                  </mask>
                  <g mask="url(#bg-mask-0)">
                    <path
                      id="路径 1"
                      style="fill: #eb9c00; opacity: 1"
                      d="M15.8333,9c0,-0.92651 -0.17897,-1.81272 -0.5369,-2.65862c-0.34593,-0.81739 -0.83437,-1.54155 -1.4653,-2.17248c-0.63093,-0.63092 -1.3551,-1.11934 -2.1725,-1.46526c-0.84587,-0.35798 -1.73207,-0.53697 -2.65861,-0.53697c-0.92651,0 -1.81271,0.17899 -2.65861,0.53697c-0.81739,0.34592 -1.54155,0.83434 -2.17248,1.46526c-0.63092,0.63093 -1.11934,1.35509 -1.46526,2.17249c-0.35798,0.84589 -0.53697,1.7321 -0.53697,2.65861c0,0.92653 0.17899,1.81273 0.53697,2.6586c0.34592,0.8174 0.83434,1.54157 1.46526,2.1725c0.63093,0.63093 1.35509,1.11937 2.17248,1.4653c0.8459,0.35793 1.73211,0.5369 2.65862,0.5369c0.92653,0 1.81273,-0.17897 2.6586,-0.5369c0.8174,-0.34593 1.54157,-0.83437 2.1725,-1.4653c0.63093,-0.63093 1.11937,-1.3551 1.4653,-2.1725c0.35793,-0.84587 0.5369,-1.73207 0.5369,-2.6586zM17.1667,9c0,1.10687 -0.21413,2.1663 -0.6424,3.1783c-0.41347,0.97693 -0.99693,1.84213 -1.7504,2.5956c-0.75347,0.75347 -1.61867,1.33693 -2.5956,1.7504c-1.012,0.42827 -2.07143,0.6424 -3.1783,0.6424c-1.10686,0 -2.16628,-0.21413 -3.17826,-0.6424c-0.97697,-0.41347 -1.84219,-0.99693 -2.59565,-1.7504c-0.75345,-0.75347 -1.3369,-1.61867 -1.75035,-2.5956c-0.42827,-1.012 -0.64241,-2.07143 -0.64241,-3.1783c0,-1.10686 0.21414,-2.16628 0.64241,-3.17826c0.41345,-0.97698 0.9969,-1.84219 1.75035,-2.59564c0.75345,-0.75345 1.61867,-1.33691 2.59565,-1.75036c1.01198,-0.42827 2.0714,-0.64241 3.17825,-0.64241c1.10687,0 2.16631,0.21414 3.17831,0.64241c0.97693,0.41345 1.84213,0.99691 2.5956,1.75036c0.75347,0.75345 1.33693,1.61866 1.7504,2.59564c0.42827,1.01198 0.6424,2.0714 0.6424,3.17826z"
                    ></path>
                    <path
                      id="路径 2"
                      style="fill: #ebc400; opacity: 1"
                      d="M12.4583,10.875v-3.75h0.6667l0.2971,0.59681l-2.25,1.12c-0.0352,0.01751 -0.07163,0.03179 -0.1093,0.04285c-0.03767,0.01107 -0.07603,0.01874 -0.1151,0.02303c-0.039,0.00428 -0.0781,0.00511 -0.1173,0.00248c-0.0392,-0.00263 -0.07787,-0.00867 -0.116,-0.01813c-0.03813,-0.00946 -0.07513,-0.02219 -0.111,-0.03819c-0.03587,-0.016 -0.07003,-0.03502 -0.1025,-0.05706c-0.03253,-0.02204 -0.06287,-0.04676 -0.091,-0.07416c-0.02813,-0.0274 -0.05367,-0.05706 -0.0766,-0.08897l-1.87995,-2.62l0.54165,-0.38866l0.54263,0.3873l-1.87,2.62c-0.02286,0.03202 -0.04835,0.06179 -0.07648,0.0893c-0.02813,0.02751 -0.05846,0.05234 -0.09098,0.07448c-0.03253,0.02215 -0.06674,0.04126 -0.10265,0.05734c-0.03591,0.01609 -0.07295,0.02889 -0.11113,0.03842c-0.03817,0.00952 -0.07689,0.01562 -0.11614,0.01829c-0.03926,0.00267 -0.07845,0.00187 -0.11756,-0.0024c-0.03911,-0.00427 -0.07755,-0.01194 -0.1153,-0.02301c-0.03776,-0.01107 -0.07425,-0.02538 -0.10947,-0.04291l-2.25,-1.12l0.29708,-0.59681h0.66667v3.75h-0.66667v-0.6667h8.25v0.6667zM13.7917,10.875c0,0.0438 -0.00427,0.08717 -0.0128,0.1301c-0.0086,0.04293 -0.02127,0.0846 -0.038,0.125c-0.01673,0.04047 -0.03727,0.0789 -0.0616,0.1153c-0.02433,0.0364 -0.05197,0.07007 -0.0829,0.101c-0.03093,0.03093 -0.0646,0.05857 -0.101,0.0829c-0.0364,0.02433 -0.07483,0.04487 -0.1153,0.0616c-0.0404,0.01673 -0.08207,0.0294 -0.125,0.038c-0.04293,0.00853 -0.0863,0.0128 -0.1301,0.0128h-8.25c-0.04377,0 -0.08713,-0.00427 -0.13006,-0.0128c-0.04293,-0.0086 -0.08462,-0.02127 -0.12506,-0.038c-0.04045,-0.01673 -0.07887,-0.03727 -0.11526,-0.0616c-0.0364,-0.02433 -0.07007,-0.05197 -0.10102,-0.0829c-0.03095,-0.03093 -0.05859,-0.0646 -0.08291,-0.101c-0.02432,-0.0364 -0.04486,-0.07483 -0.06161,-0.1153c-0.01675,-0.0404 -0.0294,-0.08207 -0.03794,-0.125c-0.00854,-0.04293 -0.01281,-0.0863 -0.01281,-0.1301v-3.75c0,-0.1045 0.02329,-0.20353 0.06986,-0.29708c0.01951,-0.03919 0.04265,-0.0761 0.06942,-0.11073c0.02678,-0.03463 0.05668,-0.06631 0.08969,-0.09505c0.03302,-0.02874 0.06853,-0.05398 0.10652,-0.07573c0.03799,-0.02175 0.07773,-0.03958 0.11924,-0.05349c0.0415,-0.01392 0.08396,-0.02365 0.12738,-0.0292c0.04342,-0.00555 0.08697,-0.00682 0.13064,-0.00379c0.04367,0.00302 0.08662,0.01028 0.12886,0.02177c0.04224,0.01149 0.08295,0.02698 0.12214,0.04649l2.25,1.12l-0.29708,0.59681l-0.54263,-0.3873l1.87,-2.62c0.04279,-0.05995 0.09411,-0.1114 0.15396,-0.15435c0.03557,-0.02552 0.07328,-0.04733 0.11314,-0.06542c0.03986,-0.01809 0.0811,-0.03211 0.12373,-0.04208c0.04263,-0.00997 0.08581,-0.01569 0.12956,-0.01715c0.04375,-0.00146 0.08722,0.00136 0.13042,0.00847c0.04319,0.0071 0.08527,0.01835 0.12625,0.03374c0.04098,0.01539 0.08006,0.03464 0.11725,0.05773c0.03719,0.02309 0.07176,0.04959 0.10373,0.07949c0.03197,0.02991 0.06072,0.06264 0.08624,0.09821l1.87995,2.61999l-0.5416,0.38867l-0.2971,-0.59681l2.25,-1.12c0.09353,-0.04657 0.19257,-0.06986 0.2971,-0.06986c0.0438,0 0.08717,0.00427 0.1301,0.01281c0.04293,0.00854 0.0846,0.02119 0.125,0.03794c0.04047,0.01675 0.0789,0.03729 0.1153,0.06161c0.0364,0.02432 0.07007,0.05195 0.101,0.0829c0.03093,0.03095 0.05857,0.06463 0.0829,0.10103c0.02433,0.03639 0.04487,0.07481 0.0616,0.11526c0.01673,0.04044 0.0294,0.08213 0.038,0.12506c0.00853,0.04293 0.0128,0.08629 0.0128,0.13006z"
                    ></path>
                  </g>
                </g>
                <defs>
                  <rect id="path_0" x="0" y="0" width="18" height="18" />
                </defs>
              </svg>
            </div>
            <div style="display: inline-block"></div>
            <p style="text-align: left; font-size: 12px; margin-bottom: 20px">
              谢谢作者很有收获
            </p>
          </div>
          <div
            style="
              font-size: 12px;
              color: rgba(144, 151, 153);
              margin-bottom: 16px;
              margin-left: 20px;
            "
          >
            <!-- comment.time -->
          </div>
          <hr
            style="
              margin-top: 10px;
              margin-bottom: 10px;
              width: 100%;
              border: 3px solid rgba(110, 120, 122, 0.1);
            "
          />
        </div>
        <div
          id="fakeComment"
          class="commentItem"
          style="width: 100%; height: auto"
        >
          <img
            src="https://th.bing.com/th/id/OIP.IW4J4IdPd_hmO-fosltfWwAAAA?w=197&h=197&c=7&r=0&o=5&dpr=1.7&pid=1.7"
            style="
              display: inline-block;
              width: 40px;
              height: 40px;
              background-color: #007994;
              margin-left: 20px;
              border-radius: 50%;
            "
            alt=""
          />
          <div
            style="
              display: inline-block;
              vertical-align: top;
              text-align: left;
              margin-left: 10px;
              width: 280px;
              overflow: wrap;
            "
          >
            <div
              style="
                display: inline-block;
                margin-top: 5px;
                margin-bottom: 5px;
                width: 100%;
              "
            >
              <strong
                ><span style="text-align: left; font-size: 14px">
                  <!-- comment.name -->蒟蒻
                </span></strong
              >
            </div>
            <div style="display: inline-block"></div>
            <p style="text-align: left; font-size: 12px; margin-bottom: 20px">
              立马去尝试！
            </p>
          </div>
          <div
            style="
              font-size: 12px;
              color: rgba(144, 151, 153);
              margin-bottom: 16px;
              margin-left: 20px;
            "
          >
            <!-- comment.time -->
          </div>
          <hr
            style="
              margin-top: 10px;
              margin-bottom: 10px;
              width: 100%;
              border: 3px solid rgba(110, 120, 122, 0.1);
            "
          />
        </div>

        <div
          v-for="(comment, index) in userComment"
          :key="index"
          id="userComment"
          class="commentItem"
          style="width: 100%; height: auto"
        >
          <img
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
            style="
              display: inline-block;
              width: 40px;
              height: 40px;
              background-color: #007994;
              margin-left: 20px;
              border-radius: 50%;
            "
            alt=""
          />
          <div
            style="
              display: inline-block;
              vertical-align: top;
              text-align: left;
              margin-left: 10px;
              width: 280px;
              overflow: wrap;
            "
          >
            <div
              style="
                display: inline-block;
                margin-top: 5px;
                margin-bottom: 5px;
                width: 100%;
              "
            >
              <strong
                ><span style="text-align: left; font-size: 14px">
                  <!-- comment.name -->OSRi4
                </span></strong
              >
            </div>
            <div style="display: inline-block"></div>
            <p style="text-align: left; font-size: 12px; margin-bottom: 20px">
              <!-- comment.content -->{{ userComment[index] }}
            </p>
          </div>
          <div
            style="
              font-size: 12px;
              color: rgba(144, 151, 153);
              margin-bottom: 16px;
              margin-left: 20px;
            "
          >
            <!-- comment.time -->
          </div>
          <hr
            style="
              margin-top: 10px;
              margin-bottom: 10px;
              width: 100%;
              border: 3px solid rgba(110, 120, 122, 0.1);
            "
          />
        </div>
      </div>
    </div>

    <div class="interactive_label">
      <div>
        <input
          v-model="commentInfor"
          style="
            background-image: linear-gradient(
              90deg,
              #00799496 -185.3%,
              #e7e8e957 100%
            );
            border-radius: 16px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2) inset;
            border: none;
            height: 24px;
            width: 280px;
            margin-left: 20px;
          "
          placeholder="     写评论"
        />
        <img
          src="./sendComment.png"
          style="
            width: 30px;
            margin-left: 10px;
            margin-top: -2px;
            vertical-align: middle;
          "
          @click="sendComment"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import api from '../../api/api'
export default {
  data () {
    return {
      isVip: true,
      passageData: [],
      userComment: [],
      commentInfor: "",
      psg: '',
      url: ''
    }
  },
  created () {
    this.loadJsonData()
  },
  methods: {
    sendComment () {
      this.userComment.push(this.commentInfor)
      console.log(this.userComment)
    },
    click_follow () {
      alert("follow")
    },
    backTolast () {
      history.back()
    },
    moreInfor () {
      alert("more")
      alert(this.commentInfor)
    },
    loadJsonData () {
      // const passageData = require('./data.json');
      // this.passageData = passageData;
      // console.log(this.passageData.image);
    },
  },
  created () {
    this.psg = this.$route.params.pgId
    axios.post(`http://${api.api}/postcontent`, { pgId: this.psg }).then(res => {
      console.log(res.data)
      this.passageData = res.data
    }).catch(err => {
      console.log(err)
    })
  }

}
</script>

<style scoped>
* {
  margin: 0px;
  overflow: hidden;
}

input::-webkit-input-placeholder {
  /* placeholder颜色 */
  color: #aab2bd;
  /* placeholder字体大小 */
  font-size: 8px;
}

p {
  text-align: center;
}

h1,
h2,
h3 {
  text-align: center;
}

.total {
  height: 640px;
  width: 360px;
  overflow: hidden;
}

.status_bar {
  position: relative;
  left: 0px;
  top: 0px;
  width: 360px;
  height: 24px;
  opacity: 1;
  background: rgba(158, 152, 152, 0.4);
}

.return_label {
  position: relative;
  width: 360px;
  height: 48px;
  opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 8px;
  overflow: hidden;
}

.user_label {
  display: flex;
  align-items: center;
  width: 360px;
  height: 56px;
  opacity: 1;
  background: rgba(255, 255, 255, 1);
}

.content {
  width: 360px;
  height: 448px;
  overflow-y: auto;
  background: rgba(144, 151, 153, 0.22);
}

.interactive_label {
  display: flex;
  align-items: center;
  width: 360px;
  height: 56px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: linear-gradient(
    180deg,
    #007994 -323.1%,
    #086a80 -157.2%,
    #ffffff 27%
  );
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px -2px 3px #0000000a;
}

.headPortrait {
  display: inline-block;
  position: relative;
  margin-left: 16px;

  margin-right: 14px;
  width: 38px;
  height: 38px;
  background-color: red;
}

.follow_button {
  position: relative;
  left: 20%;
  width: 100px;
  height: 40px;
}

.userComment {
  width: 100%;
  height: auto;
  background-color: white;
}
</style>