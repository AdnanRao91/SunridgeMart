import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomBreadcrumbs({ breadcrumbs }) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        {
          breadcrumbs.map((item) => {
            return (
              <Link underline="hover" color="inherit" sx={{textTransform:"capitalize"}} href={item.path}>
                {item.label}
              </Link>
            )
          })
        }

        {/* <Link
          underline="hover"
          color="inherit"
          href="/products"
        >
          Products
        </Link> */}
      </Breadcrumbs>
    </div>
  );
}