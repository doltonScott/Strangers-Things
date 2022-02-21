import React from 'react';
import { CenterLayout } from './util';
import { Form, FormField } from './styled';
import { useCreateMessage } from '../custom-hooks';

export default function CreateMessage() {
	const {
		error,
		isMyPost,
		handleChange,
		handleSubmit,
		postId,
		title,
		form,
		cancel,
	} = useCreateMessage();

	return (
		<CenterLayout>
			<h2>Send Message</h2>
			<FormField>
				<label>Post ID: {postId}</label>
				<label>Title: {title}</label>
			</FormField>
			<Form onSubmit={handleSubmit}>
				<FormField>
					<label>Message</label>
					<textarea
						name='content'
						style={{ borderRadius: '5px' }}
						value={form.content}
						onChange={handleChange}
						placeholder={isMyPost && 'Messaging is disabled for your own posts'}
					></textarea>
				</FormField>
				<input type='submit' value='Send' disabled={isMyPost} />
				<button className='cancel' onClick={cancel}>
					Cancel
				</button>
			</Form>
		</CenterLayout>
	);
}
