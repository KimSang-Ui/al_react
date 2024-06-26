import React, { useState } from "react";
import MapModal from "../modal/MapModal";
import { BigButton, PlaceBt } from "../../styles/common/reviewProductCss";
import CartModal from "../modal/CartModal";
import { Common } from "../../styles/CommonCss";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { postAddCart } from "../../api/productApi";
import Swal from "sweetalert2";

export const GoMapModal = () => {
  const [isMapModalOpen, setMapModalOpen] = useState(false);
  const { code } = useParams();
  const handleOpenMapModal = () => {
    setMapModalOpen(true);
  };
  const handleCloseMapModal = () => {
    setMapModalOpen(false);
  };
  return (
    <div>
      {isMapModalOpen && <MapModal onClose={handleCloseMapModal} code={code} />}
      <PlaceBt style={{fontSize:"2rem",height:"40px"}} onClick={handleOpenMapModal}> 판매처 선택</PlaceBt>
    </div>
  );
};

//
export const GoCartModal = ({ postcard }) => {
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  // 장바구니 넣기
  const addCartMutation = useMutation({
    mutationFn: () => {
     
      postAddCart({ postcard })
    },
    onSuccess: () => {
      setCartModalOpen(true);
    },
  });
  const handleOpenCartModal = () => {
    if (postcard.stock === 0) {
      Swal.fire("매장을 선택해 주세요.")
      return;
    } else if (!postcard.delivery) {
      Swal.fire("배송방식을 선택해 주세요.")
      return;
    }
    addCartMutation.mutate(postcard);
  };

  const handleCloseCartModal = () => {
    setCartModalOpen(false);
  };

  return (
    <div>
      {isCartModalOpen && <CartModal onClose={handleCloseCartModal} />}
      <BigButton
        onClick={handleOpenCartModal}
        style={{
          background: `${Common.color.p000}`,
          border: `1px solid ${Common.color.p300}`,
        }}
      >
        장바구니 담기
      </BigButton>
    </div>
  );
};
