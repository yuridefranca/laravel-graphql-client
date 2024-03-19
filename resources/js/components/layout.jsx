import { Header } from './header';
import { Footer } from './footer';

export function Layout({ children, title }) {
	return (
		<>
			<Header title={title} />
			<main>{children}</main>
			<Footer />
		</>
	);
}
