import cn from 'classnames'

import styles from './Button.module.scss'
import { ButtonProps } from './Button.props'
import ArrowIcon from './arrow.svg'

export const Button = ({
	                       appearance = 'ghost',
	                       arrow = 'none',
	                       children,
	                       className,
	                       ...props
                       }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost'
			}, className)}
			{...props}
		>
			{children}
			{arrow !== 'none' &&
        <span className={cn(styles.arrow, {
					[styles.down]: arrow === 'down',
	        [styles.right]: arrow === 'right'
        })}>
	        <ArrowIcon />
        </span>
			}
		</button>
	)
}
