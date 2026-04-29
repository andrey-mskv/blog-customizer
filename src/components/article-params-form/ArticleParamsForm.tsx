import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';

import styles from './ArticleParamsForm.module.scss';
import { useRef, useState } from 'react';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Text } from 'src/ui/text';
import { Separator } from 'src/ui/separator';
import { useAltWayToClose } from './hooks/useAltWayToClose';
import clsx from 'clsx';

type ArticleParamsFormProps = {
	setArticleState: (state: ArticleStateType) => void;
};

export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const { setArticleState } = props;

	// Состояние для управления открытием/закрытием формы
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Состояние формы
	const [formState, setFormState] =
		useState<ArticleStateType>(defaultArticleState);

	// Обработчик отправки формы
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setArticleState(formState);
		setIsMenuOpen(false);
	};

	// Обработчик сброса формы
	const handleReset = () => {
		setFormState(defaultArticleState);
		setArticleState(defaultArticleState);
		setIsMenuOpen(false);
	};

	const rootRef = useRef<HTMLDivElement>(null); // Ссылка на корневой элемент

	useAltWayToClose({
		isOpen: isMenuOpen,
		onClickOutside: () => {
			setIsMenuOpen(false);
		},
		rootRef,
	});

	return (
		<div ref={rootRef}>
			<ArrowButton
				isOpen={isMenuOpen}
				onClick={() => {
					setIsMenuOpen(!isMenuOpen);
				}}
			/>
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isMenuOpen,
				})}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Text size={31} weight={800} uppercase>
						задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						placeholder={'шрифт'}
						selected={formState.fontFamilyOption}
						onChange={(value) =>
							setFormState({ ...formState, fontFamilyOption: value })
						}
						title={'шрифт'}
					/>
					<RadioGroup
						name={'radio'}
						options={fontSizeOptions}
						selected={formState.fontSizeOption}
						onChange={(value) =>
							setFormState({ ...formState, fontSizeOption: value })
						}
						title={'размер шрифта'}
					/>
					<Select
						options={fontColors}
						placeholder={'цвет шрифта'}
						selected={formState.fontColor}
						onChange={(value) =>
							setFormState({ ...formState, fontColor: value })
						}
						title={'цвет шрифта'}
					/>
					<Separator />
					<Select
						options={backgroundColors}
						placeholder={'цвет фона'}
						selected={formState.backgroundColor}
						onChange={(value) =>
							setFormState({ ...formState, backgroundColor: value })
						}
						title={'цвет фона'}
					/>
					<Select
						options={contentWidthArr}
						placeholder={'ширина контента'}
						selected={formState.contentWidth}
						onChange={(value) =>
							setFormState({ ...formState, contentWidth: value })
						}
						title={'ширина контента'}
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={handleReset}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</div>
	);
};
