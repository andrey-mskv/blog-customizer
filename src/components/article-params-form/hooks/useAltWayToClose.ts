import { useEffect } from 'react';

type UseAltWayToCloseProps = {
	isOpen: boolean; // Флаг, указывающий, открыто ли меню
	onClickOutside: () => void; // Функция, вызываемая при клике вне меню
	rootRef: React.RefObject<HTMLDivElement>; // Ссылка на корневой элемент, для которого нужно отслеживать клики вне его
};

export const useAltWayToClose = ({
	isOpen,
	rootRef,
	onClickOutside,
}: UseAltWayToCloseProps) => {
	useEffect(() => {
		if (!isOpen) return; // Если меню не открыто, не добавляем обработчик клика

		const handleClick = (event: MouseEvent) => {
			const { target } = event;
			if (target instanceof Node && !rootRef.current?.contains(target)) {
				// Проверяем, что клик был вне корневого элемента
				onClickOutside();
			}
		};

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClickOutside();
			}
		};

		window.addEventListener('mousedown', handleClick); // обработчик клика
		window.addEventListener('keydown', handleKeyDown); // обработчик нажатия клавиши Escape

		return () => {
			window.removeEventListener('mousedown', handleClick);
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, onClickOutside]); //
};
