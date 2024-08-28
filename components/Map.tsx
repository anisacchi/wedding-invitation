import Link from 'next/link';
import React from 'react';

const Map = () => {
	const mapUrl = 'https://maps.app.goo.gl/7MwFCgFWa7Do4Gi6A'
  return (
    <div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d493.92618717621417!2d112.61352382600306!3d-7.956564504219812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7883f88eb630f1%3A0x6f7caffe600b6dc0!2sAula%20SMKN%202%20Malang!5e0!3m2!1sen!2sid!4v1724846700532!5m2!1sen!2sid'
        width='600'
        height='450'
        style={{ border: 0 }}
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
			<div>
				<Link href={mapUrl} referrerPolicy='no-referrer' target='_blank' rel='noopener noreferrer'>
					<button className='px-4 py-2 flex gap-2 justify-center items-center bg-maroon-dark text-white text-sm rounded-lg hover:bg-maroon-light'>Buka Map</button>
				</Link>
			</div>
    </div>
  );
};

export default Map;
