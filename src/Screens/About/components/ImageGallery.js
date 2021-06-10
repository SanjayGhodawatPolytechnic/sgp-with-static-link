import React from 'react';
import ImageGallery from 'react-image-gallery';

import '../../../../node_modules/react-image-gallery/styles/css/image-gallery.css'

const ImageGal = ({
    listNo = 1
}) => {
    const images1 = [
        {
            original:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/01.jpg',
            thumbnail:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/01.jpg'
        },
        {
            original:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/02.jpg',
            thumbnail:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/02.jpg'
        },
        {
            original:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/03.jpg',
            thumbnail:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/03.jpg'
        },
        {
            original:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/04.jpg',
            thumbnail:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/04.jpg'
        },
        {
            original:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/05.jpg',
            thumbnail:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/05.jpg'
        },
        {
            original:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/06.jpg',
            thumbnail:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/06.jpg'
        },
        {
            original:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/07.jpg',
            thumbnail:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/07.jpg'
        },
        {
            original:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/08.jpg',
            thumbnail:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/08.jpg'
        },
        {
            original:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/09.jpg',
            thumbnail:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/09.jpg'
        },
        {
            original:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/10.jpg',
            thumbnail:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/10.jpg'
        },
        {
            original:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/11.jpg',
            thumbnail:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/11.jpg'
        },
    ]
    const images2 = [
        {
            original:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/11.jpg',
            thumbnail:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/11.jpg'
        },
        {
            original:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/12.jpg',
            thumbnail:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/12.jpg'
        },
        {
            original:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/13.jpg',
            thumbnail:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/13.jpg'
        },
        {
            original:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/14.jpg',
            thumbnail:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/14.jpg'
        },
        {
            original:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/15.jpg',
            thumbnail:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/15.jpg'
        },
        {
            original:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/16.jpg',
            thumbnail:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/16.jpg'
        },
        {
            original:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/17.jpg',
            thumbnail:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/17.jpg'
        },
        {
            original:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/18.jpg',
            thumbnail:'http://www.sgipolytechnic.in/photo_gallery/Farmers_help/18.jpg'
        },        
    ]
    return (
        <ImageGallery items={listNo === 1 ? images1 : images2} />
    );
}

export default ImageGal;
