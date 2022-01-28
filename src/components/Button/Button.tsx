import React from 'react';
import './style.css';

interface ButtonProps {
	primary?: boolean;
	backgroundColor?: string;
	size?: 'small' | 'medium' | 'large';
	label: string;
	onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
	primary = false,
	size = 'medium',
	backgroundColor,
	label,
	...props
}: ButtonProps) => {
	const mode = primary ? 'h-button--primary' : 'h-button--secondary';
	const button_size = size ? `h-button--${size}` : 'h-button--medium';
	const button_classes = ['h-button', button_size, mode].join(' ');

	return (
		<button
			type="button"
			className={button_classes}
			style={{ backgroundColor }}
			{...props}
		>
			{label}
		</button>
	);
};
