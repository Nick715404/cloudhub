import styles from './styles.module.css';
import { ElementType } from 'react';
import { ButtonProps } from '../types';
import Link from 'next/link';

const defaultElement = 'button';

export const Button = <E extends ElementType = typeof defaultElement>({
	label,
	style,
	accent,
	href,
	as,
	...props
}: ButtonProps<E>) => {
	const Element = as || defaultElement;

	const stylesClassnames = as === 'a' ? styles.link : styles.button;

	return (
		<Element
			className={`${style} ${accent ? styles.accent : ''} ${stylesClassnames}`}
			{...props}
		>
			{label}
		</Element>
	);
};
