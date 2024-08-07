import Image from "next/image";
import Link from "next/link";

const styles = {
    wrapper: `flex items-center`,
    icon: `w-8 h-8 mx-2`,
    title: `text-xl font-semibold`,
};

/**
 * Renders the logo component for the Reddit Client on the header.
 * 
 * @returns the logo component.
 */
const Logo = () => {
    return (
        <div>
            <Link href="/" className={styles.wrapper}>
                <Image 
                    src="/reddit-icon.png" 
                    alt="Reddit Icon" 
                    width={32}
                    height={32}
                    className={styles.icon}
                />
                <h1 className={styles.title}>Reddit Client</h1>
            </Link>
        </div>
    );
};

export default Logo;