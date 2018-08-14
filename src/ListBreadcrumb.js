import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'

const VideoListBreadCrumb = (props) => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
        <BreadcrumbItem active>Video List</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default VideoListBreadCrumb;