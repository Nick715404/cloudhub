'use client';

export default function ErrorPage(error: Error) {
	return <div className='container'>Error page {error.message}</div>;
}
