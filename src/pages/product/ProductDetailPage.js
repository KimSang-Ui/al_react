import styled from "@emotion/styled/macro";
import React, { useEffect, useState } from "react";
import Count from "../../components/basic/Count";
import { P16, P20, P30, PB20, PB30 } from "../../styles/basic";
import { Common } from "../../styles/CommonCss";

import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { UlStyle } from "../../components/detail/DetailInfo";
import { GoCartModal, GoMapModal } from "../../components/detail/GoCart";
import ListLi from "../../components/detail/ListLi";
import ReviewProduct from "../../components/detail/ReviewProduct";
import { ProductItemData } from "../../mock/ProductitemData";

import { useQuery } from "react-query";
import { getDetail } from "../../api/productApi";
import { postWish, useWishDeleteMutation, useWishPostCheckMutation, useWishPostMutation } from "../../api/wishListApi";
import { placeState } from "../../atom/placeState";
import {
  BigButton,
  HeartButton,
  ItemContent,
  ItemLine,
  ItemWrap,
  MarginB40,
  TotalAmount,
} from "../../styles/common/reviewProductCss";
import { StarRev } from "../../styles/common/StarCss";
import { stockState } from "../../atom/stockState";
import ListLi2 from "../../components/detail/ListLi2";
import ListLi3 from "../../components/detail/ListLi3";
import axios from "axios";
import jwtAxios from "../../util/jwtUtil";
import { buypage } from "../../api/directPayApi";
import Swal from "sweetalert2";
import { addressState } from "../../atom/addressState";
import { SERVER_URL } from "../../api/config";
import { useKakaoLoader } from "react-kakao-maps-sdk";

export const items1 = ["1", "2", "3"];
export const items2 = ["a", "b", "c"];
const DetailedItemPage = () => {
  const navigate = useNavigate();
  const productItem = ProductItemData[0];
  const selectedPlace = useRecoilValue(placeState);
  const selectedStockNum = useRecoilValue(stockState);
  const seletedAddress = useRecoilValue(addressState);
  const [count, setCount] = useState(1);
  const [isHeartChecked, setHeartChecked] = useState();

  const [isMapModalOpen, setMapModalOpen] = useState(false);
  const [isCartModalOpen, setCartModalOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [delivery, setDelivery] = useState("");

  const [userInfo, setUserInfo] = useState({
    nickname: "",
    phone: "",
    address: "",
    address2: "",
    email: "",
  });
  const [productInfo, setProductInfo] = useState([
    {
      code: "",
      name: "",
      picture: "",
      price: "",
      amount: "",
      market: "",
      delivery: "",
      address: "",
      address2: "",
    },
  ]);

  const [reviewInfo, setReviewInfo] = useState([
    {
      userNm: "",
      starCount: "",
      review: "",
      date: "",
    },
  ]);

  // 모달관련
  const handleOpenMapModal = () => {
    setMapModalOpen(true);
  };

  const handleCloseMapModal = () => {
    setMapModalOpen(false);
  };

  const handleOpenCartModal = () => {
    setCartModalOpen(true);
  };

  const handleCloseCartModal = () => {
    setCartModalOpen(false);
  };

  const AA = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    gap: 30px;
    margin-bottom: 20px;
    /* justify-content: space-between; */
  `;

  // @AREA

  const { code } = useParams();

  const detailParam = {
    code: Number(code),
  };

  const initState = [
    {
      code: 0,
      name: "",
      ratingaverage: 0,
      price: 0,
      maincategory: "",
      subcategory: "",
      content: "",
      aroma: "",
      taste: "",
      finish: "",
      nation: "",
      picture: "",
      picture2: "",
      reviewcacount: 0,
    },
  ];

  const { data } = useQuery({
    queryKey: [],
    queryFn: () => getDetail({ code }),
  });

  const serverData = data || initState;

  const starImages = Array.from(
    { length: serverData[0].ratingaverage },
    (_, index) => (
      <img
        key={index}
        src={process.env.PUBLIC_URL + "/images/star.png"}
        alt="star"
      />
    ),
  );

  const tastes = serverData[0].taste;
  const aromas = serverData[0].aroma;
  const finishs = serverData[0].finish;
  const contents = serverData[0].content;
  const nations = serverData[0].nation;
  const review = serverData[0].reviewcacount;
  const taste = tastes;
  const categoryArray = [
    `${serverData[0].maincategory}`,
    `${serverData[0].subcategory}`,
  ];

  // -------------------찜목록 추가 기능 start ---------------------------
  const { mutate: wishPostMutate } = useWishPostMutation();
  const { mutate: wishDeleteMutate } = useWishDeleteMutation();
  const { mutate: wishPostCheckMutate } = useWishPostCheckMutation({
    setHeartChecked: setHeartChecked,
  });

  const fetchData = () => {
    if (!isHeartChecked) {
      wishPostMutate(
        {
          code: detailParam.code,
        },
        {
          onSuccess: () => {
            wishPostCheckMutate({ code: detailParam.code });
          },
        },
      );
    }
    if (isHeartChecked) {
      wishDeleteMutate(
        {
          code: detailParam.code,
        },
        {
          onSuccess: () => {
            wishPostCheckMutate({ code: detailParam.code });
          },
        },
      );
    }
  };
  const successFn = data => {
    // getWishList(data);
  };
  const failFn = data => {
    alert("failFn : 데이터 호출에 실패하였습니다.");
  };

  const totalPrice = serverData[0]?.price * count;
  const addComma = price => {
    let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };
  const formattedPrice = addComma(totalPrice);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const postCard = {
    alcoholcode : code,
    stock: selectedStockNum,
    marketname: selectedPlace,
    amount: count,
    price: serverData[0].price,
    delivery
  };

  // -------------------찜목록 추가 기능 end ---------------------------
  const buy = async () => {
    const info = await buypage();
    if (selectedPlace === "") {
      return Swal.fire("매장을 선택해 주세요.");
    } else if (delivery === "") {
      return Swal.fire("배송방식을 선택해 주세요.");
    }
    if (delivery === "Delivery") {
      setProductInfo([
        {
          code: serverData[0].code,
          name: serverData[0].name,
          picture: serverData[0].picture,
          price: serverData[0].price,
          amount: postCard.amount,
          market: selectedPlace,
          delivery: delivery,
          address: info.address + " " + info.address2,
        },
      ]);
    } else if (delivery === "PickUp") {
      setProductInfo([
        {
          code: serverData[0].code,
          name: serverData[0].name,
          picture: serverData[0].picture,
          price: serverData[0].price,
          amount: postCard.amount,
          market: selectedPlace,
          delivery: delivery,
          address: seletedAddress,
        },
      ]);
    }

    setUserInfo({
      nickname: info.nickname,
      address: info.address,
      address2: info.address2,
      phone: info.phone,
      email: info.email,
    });
  };

  const getReview = async () => {
    const body = {
      code: detailParam.code,
    };
    await jwtAxios
      .post(`${SERVER_URL}/detail/alcohol`, body, {})
      .then(res => {
        const data = [];
        for (let i = 0; i < res.data.length; i++) {
          data.push({
            userNm: res.data[i].nickname,
            starCount: res.data[i].grade,
            review: res.data[i].writing,
            date: res.data[i].date,
          })
        }
        setReviewInfo(data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  
  useEffect(() => {
    if (userInfo.nickname !== "") {
      navigate("/directpay/buy", {
        state: { info: userInfo, productInfo: productInfo,price: totalPrice },
      });
    }
    getReview();
    wishPostCheckMutate({ code: detailParam.code });
  }, [userInfo,isHeartChecked]);

  return (
    <ItemWrap>
      <ItemContent>
        <img src={serverData[0].picture} />
        <div className="information">
          <AA>
            <h1>{serverData[0]?.name}</h1>
            <HeartButton
              onClick={() => {
                fetchData();
              }}
            >
              <img
                src={
                  !isHeartChecked
                    ? process.env.PUBLIC_URL + "/images/heartOff.svg"
                    : process.env.PUBLIC_URL + "/images/heartOn.svg"
                }
                alt="heart"
                className="heart-icon"
                style={{ cursor: "pointer" }}
              />
            </HeartButton>
          </AA>

          <P16 style={{ color: `${Common.color.p600}` }}>
            {productItem.introduction}
          </P16>
          <div className="starRev">
            <StarRev>{starImages}</StarRev>
            <a href="#리뷰">{review} 리뷰더보기</a>
          </div>
          <h1>{serverData[0].price}원</h1>
          <div className="line" />
          {/* 맵모달 판매처 선택 버튼 */}
          <GoMapModal />
          <div className="info">
            <ul>
              <li>선택된 판매처</li>
              <li>배송정보</li>
            </ul>
            <ul>
              {serverData ? (
                <li>{selectedPlace}&nbsp;</li>
              ) : (
                // <div></div>
                <li>판매처를 선택해주세요</li>
              )}
              {/* <li>화이트 와인</li> */}
              <li>
                <select
                  style={{
                    width: "150px",
                    height: "28px",
                    border: `1px solid ${Common.color.p300}`,
                    color: `${Common.color.p600}`,
                    fontSize: "16px",
                    // borderRadius: "5px",
                  }}
                  onChange={e => {
                    setDelivery(e.target.value);
                  }}
                >
                  <option value={""}>배송선택</option>
                  <option value={"PickUp"}>픽업</option>
                  <option value={"Delivery"}>배송</option>
                </select>
              </li>
            </ul>
          </div>
          {/* <Count /> */}
          <div className="count">
            <p className="product-name">{serverData[0].name}</p>
            <Count name="productCnt" setCount={setCount} count={count} />
            <p>{serverData[0].price}원</p>
          </div>
          <div className="line" />
          <TotalAmount>
            <P20>총 상품금액</P20>
            <P30 style={{ color: `${Common.color.f900}`, fontWeight: "bold" }}>
              {formattedPrice}원
            </P30>
          </TotalAmount>
          <div className="pay-button">
            <GoCartModal postcard={postCard} />

            <BigButton
              onClick={async () => {
                await buy();
                // navigate(`/pay`)
              }}
              style={{
                background: `${Common.color.f900}`,
                border: `1px solid ${Common.color.p000}`,
                color: `${Common.color.p000}`,
              }}
            >
              바로 구매하기
            </BigButton>
          </div>
        </div>
      </ItemContent>
      <ItemLine />

      {/* 상품 info */}
      <div>
        <PB30>상세페이지</PB30>
        <UlStyle>
          <img style={{ width: "600px" }} src={serverData[0].picture2} />
        </UlStyle>
      </div>
      <ItemLine/>
      <div>
        <PB20>Tasting Note</PB20>
        <UlStyle>
          <ListLi taste={tastes} aroma={aromas} finish={finishs} />
          {/* <ListLi aroma={taste} />
          <ListLi finish={taste} /> */}
          {/* <ListLi items={items2} /> */}
        </UlStyle>
      </div>
      <ItemLine />

      <div>
        <PB20>Information</PB20>
        <UlStyle>
          <ListLi2 content={contents} nation={nations}></ListLi2>
        </UlStyle>
      </div>
      <ItemLine />
      <div>
        <PB20>Category</PB20>
        <UlStyle>
          <ListLi3 items={categoryArray}></ListLi3>
          {/* <ListLi items={serverData[0].subcategory} /> */}
        </UlStyle>
      </div>
      <ItemLine></ItemLine>
      
      {/* <PB30>여기에 상세페이지 </PB30> */}

      {/* 리뷰 목록 */}
      <div id="리뷰">
        <MarginB40 />
        <MarginB40 />
        <PB20>리뷰({review})</PB20>
        <ItemLine
          style={{ background: `${Common.color.p600}`, height: "2px",margin:"10px 0 0 0" }}
        />
        {reviewInfo && reviewInfo.map((reviews, index) => {
          return (
            <ReviewProduct
              key={index}
              userNm={reviews.userNm}
              starCount={reviews.starCount}
              review={reviews.review}
              date={reviews.date}
            />
          );
        })}
      </div>
    </ItemWrap>
  );
};

export default DetailedItemPage;
