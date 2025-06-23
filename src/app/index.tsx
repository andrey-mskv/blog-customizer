import { CSSProperties, useState } from "react";
import { defaultArticleState } from "src/constants/articleProps";

import styles from '../styles/index.module.scss';
import { ArticleParamsForm } from "src/components/article-params-form";
import { Article } from "src/components/article";

export const App = () => {
	// Состояние для управления параметрами страницы
	const [articleState, setArticleState] = useState(defaultArticleState);
	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': articleState.fontFamilyOption.value,
					'--font-size': articleState.fontSizeOption.value,
					'--font-color': articleState.fontColor.value,
					'--container-width': articleState.contentWidth.value,
					'--bg-color': articleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setArticleState={setArticleState} />
			<Article />
		</main>
	);
};