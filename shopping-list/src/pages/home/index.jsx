import { Container } from './styles.js';

import ImgHeader from '../../assets/Image_header.png';

export function Home() {
  return (
			<Container>
				<header>
					<img src={ImgHeader} alt='' />
					<div>
						<h1>Lista de Compras</h1>
					</div>
				</header>
			</Container>
		);
};