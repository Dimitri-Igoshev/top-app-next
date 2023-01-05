import cn from 'classnames'

import { TagProps } from './Tag.props'
import styles from './Tag.module.scss'

export const Tag = ({ size = 's', color = 'ghost', href, children, className, ...props }: TagProps) => {
	return (
		<div
			className={cn(styles.tag, {
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
				[styles.ghost]: color === 'ghost',
				[styles.red]: color === 'red',
				[styles.gray]: color === 'gray',
				[styles.green]: color === 'green',
				[styles.primary]: color === 'primary'
			}, className)}
			{...props}
		>
			{
				href
					? <a href={href}>{children}</a>
					: <>{children}</>
			}
		</div>
	)
}
