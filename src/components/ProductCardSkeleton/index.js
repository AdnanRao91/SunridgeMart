import React from 'react';
import { Skeleton } from '@mui/material';

const ProductCardSkeleton = () => {
    return (
        <div className="product-card-container height-product-card relative">
            <Skeleton variant="circular" sx={{ margin: '0 auto' }} width={190} height={190} />

            <div className="content-container">
                <Skeleton variant="text" width={120} height={18} />
                <Skeleton variant="text" width={200} height={26} />
                <div className="flex justify-center gap-2 items-center mt-1">
                    <Skeleton variant="circular" width={20} height={20} />
                    <Skeleton variant="text" width={30} height={18} />
                </div>
                <div className="flex justify-between mt-2">
                    <Skeleton variant="text" width={70} height={24} />
                    <Skeleton variant="text" width={70} height={24} />
                </div>
                <div className="flex justify-center gap-3 items-center mt-2 icon-product-card">
                    <div className="icon-container !border-none">
                        <Skeleton variant="circular" width={20} height={20} />
                    </div>
                    <div className="icon-container !border-none">
                        <Skeleton variant="circular" width={20} height={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardSkeleton;
