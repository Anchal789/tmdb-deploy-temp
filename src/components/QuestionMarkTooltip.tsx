import type { FunctionComponent } from "react";
import styles from "./Components.module.scss";

const QuestionMarkTooltip: FunctionComponent = () => {
	return (
		<img
			src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-635-circle-question-58cc1ee10fd7a11546f8e97b1b5590b2d6e0c883acaea64a5f4c2c5b60f9f364.svg'
			loading='lazy'
			alt='?'
			className={styles.questionMarkTooltip}
		/>
	);
};

export default QuestionMarkTooltip;
