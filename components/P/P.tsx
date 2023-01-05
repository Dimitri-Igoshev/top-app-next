import cn from 'classnames'

import { PProps } from './P.props'
import styles from './P.module.scss'


export const P = ({ size = 'm', children, className, ...props }: PProps) => {
	return (
		<p
			className={cn(styles.p, {
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
				[styles.l]: size === 'l'
			}, className)}
			{...props}
		>
			{children}
		</p>
	)
}
