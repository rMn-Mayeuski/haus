import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <a href="" className='header-nav__logo'>
                <svg width="84" height="40" viewBox="0 0 84 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M52.9987 11.3554V32.6254C52.9987 33.7616 53.2288 34.6836 53.6908 35.3932C54.1515 36.1032 54.879 36.4574 55.8729 36.4574C56.5821 36.4574 57.4428 36.1915 58.4541 35.6592C59.4651 35.1268 60.5563 34.2578 61.7271 33.0512V18.647C61.7271 17.4758 61.5848 16.5538 61.3013 15.8792C61.0167 15.2057 60.5206 14.6909 59.811 14.3355V14.1761C60.591 14.1761 61.3812 14.0524 62.1795 13.8036C62.9778 13.5555 63.7312 13.218 64.4415 12.7922C65.1508 12.3664 65.7535 11.8874 66.2511 11.3554H66.4106L66.4106 11.3931C66.411 12.1977 66.4176 25.6356 66.4106 27.5062C66.3927 32.3952 68.0786 38.3622 75.7254 38.7393C77.1781 38.8108 78.3599 38.2869 79.2647 37.3821C80.1695 36.4772 80.6215 35.2623 80.6215 33.7361C80.6215 32.6368 80.3198 31.7404 79.7167 31.0486C79.1132 30.3569 78.3412 29.7713 77.4018 29.2922C76.4612 28.8132 75.4765 28.3608 74.4481 27.935C73.3477 27.4384 72.3006 26.8704 71.3079 26.2319C70.314 25.593 69.4982 24.7772 68.8598 23.7833C68.2209 22.7906 67.9017 21.5133 67.9017 19.9513C67.9017 18.3905 68.3008 16.98 69.0991 15.7202C69.8974 14.4611 71.0061 13.4672 72.4254 12.7397C73.8442 12.0129 75.4765 11.6488 77.3219 11.6488C78.2084 11.6488 79.0866 11.7108 79.9564 11.8349C80.8255 11.9597 81.6679 12.1461 82.4844 12.3938L80.8342 18.8338H80.6748C80.3555 16.9534 79.7167 15.4991 78.759 14.4695C77.8009 13.441 76.7181 12.9261 75.5123 12.9261C74.1634 12.9261 73.1175 13.4052 72.3721 14.3629C71.6271 15.321 71.2546 16.4039 71.2546 17.6097C71.2546 18.674 71.5472 19.5522 72.1328 20.2443C72.7183 20.9361 73.4805 21.5217 74.421 22.0007C75.3608 22.4798 76.3456 22.9504 77.3752 23.4108C78.4744 23.8724 79.5215 24.4138 80.5154 25.0344C81.5081 25.6554 82.333 26.4537 82.9901 27.4293C83.646 28.4057 83.9744 29.6564 83.9744 31.1818C83.9744 33.0626 83.5395 34.6504 82.6708 35.9449C81.8007 37.2409 79.8426 39.9173 75.612 39.9634C72.2519 40.0003 69.5717 38.2287 66.6061 38.2287C64.3399 38.2287 62.8092 39.2427 61.8869 39.9173H61.7271V36.3513C61.7271 35.8547 61.7355 35.3582 61.7537 34.8609C61.7712 34.3647 61.7979 33.956 61.8336 33.6368H61.7804C61.0354 34.6307 60.1838 35.6059 59.2258 36.564C58.2677 37.5221 57.2476 38.3204 56.1655 38.9592C55.0826 39.5977 54.0275 39.9173 52.9987 39.9173C51.5087 39.9173 50.3645 39.393 49.5659 38.347C49.3612 38.0788 49.1828 37.7913 49.0306 37.4845C48.5364 38.1732 47.865 38.7599 47.0161 39.245C46.1467 39.7412 45.2868 39.99 44.4348 39.99C43.4056 39.99 42.5366 39.6441 41.8273 38.952C41.117 38.2603 40.7627 37.1872 40.7627 35.7322V35.2532H40.7095C39.5737 36.637 38.3321 37.7637 36.9841 38.6328C35.6352 39.5018 34.2872 39.9367 32.9391 39.9367C31.5556 39.9367 30.3487 39.3862 29.3202 38.2869C28.2906 37.1872 27.7766 35.7505 27.7766 33.9758C27.7766 32.4854 28.2556 31.0311 29.2137 29.6115C30.1718 28.1926 31.6169 26.9419 33.5513 25.8594C35.4846 24.7772 37.9239 23.9698 40.8693 23.4375C40.8693 21.9832 40.8776 20.626 40.8959 19.3661C40.9134 18.107 40.9225 17.0865 40.9225 16.3057C40.9225 15.1703 40.7003 14.2921 40.257 13.6712C39.813 13.0506 39.1837 12.7397 38.3675 12.7397C37.5164 12.7397 36.8243 12.9977 36.2923 13.5114C35.76 14.0262 35.3076 14.665 34.9351 15.4276C34.5626 16.1908 34.2072 16.9625 33.8705 17.7425C33.533 18.5237 33.1339 19.1713 32.6731 19.6854C32.2116 20.2002 31.6085 20.457 30.8635 20.457C30.2954 20.457 29.8164 20.2439 29.4264 19.8185C29.0356 19.3927 28.8412 18.8429 28.8412 18.1683C28.8412 17.069 29.3373 16.0128 30.3312 15.0018C31.3243 13.9904 32.5749 13.1746 34.0836 12.5533C35.5911 11.933 37.1252 11.6222 38.6871 11.6222C40.8868 11.6222 42.5898 12.1457 43.7964 13.1921C45.0021 14.2389 45.606 15.6669 45.606 17.4765C45.606 18.6127 45.5969 19.9338 45.5794 21.4417C45.5611 22.9501 45.5436 24.5375 45.5261 26.2052C45.5078 27.8733 45.4903 29.4966 45.4728 31.0753C45.4546 32.6543 45.4466 34.0474 45.4466 35.2532C45.4466 36.1405 45.5793 36.8151 45.8453 37.2755C46.1117 37.7371 46.5458 37.9673 47.1493 37.9673C47.7166 37.9673 48.3021 37.7196 48.9056 37.2226L48.9137 37.2335C48.5502 36.3988 48.3685 35.4305 48.3685 34.3289V18.647C48.3685 17.4758 48.2087 16.5538 47.8894 15.8792C47.5702 15.2057 47.0729 14.6909 46.3994 14.3355V14.1761C47.1794 14.1761 47.9693 14.0524 48.7676 13.8036C49.5659 13.5555 50.3192 13.218 51.0296 12.7922C51.7388 12.3664 52.3419 11.8874 52.8388 11.3554H52.9987ZM10.325 0V0.15943C9.40192 0.550204 8.72807 1.22369 8.30231 2.18179C7.87654 3.13989 7.66384 4.08049 7.66384 5.00244L7.46979 14.636H20.8098V5.00244C20.8098 4.08049 20.5876 3.13989 20.1443 2.18179C19.7003 1.22369 19.0531 0.550204 18.2015 0.15943V0H28.5269V0.15943C27.6396 0.550204 26.9741 1.22369 26.5309 2.18179C26.0868 3.13989 25.8658 4.08049 25.8658 5.00244V34.914C25.8658 36.0502 26.1226 37.0433 26.6374 37.8948C27.1514 38.746 27.7819 39.3674 28.5269 39.7578V39.9172H18.2015V39.7578C18.9111 39.3674 19.523 38.746 20.0378 37.8948C20.5518 37.0433 20.8098 36.0502 20.8098 34.914V15.86H7.46979L7.66384 34.914C7.66384 36.0502 7.92067 37.0433 8.43548 37.8948C8.94952 38.746 9.57999 39.3674 10.325 39.7578V39.9172H0V39.7578C0.709234 39.3674 1.32144 38.746 1.83587 37.8948C2.34991 37.0433 2.60788 36.0502 2.60788 34.914V5.00244C2.60788 4.08049 2.40318 3.13989 1.99567 2.18179C1.58741 1.22369 0.922309 0.550204 0 0.15943V0H10.325ZM40.8693 24.1829C38.6339 24.6802 36.9308 25.3803 35.76 26.2851C34.5889 27.19 33.7815 28.201 33.3382 29.3185C32.8942 30.4364 32.6731 31.5631 32.6731 32.6985C32.6731 34.0474 32.9474 35.1029 33.498 35.865C34.0478 36.6287 34.837 37.0096 35.8662 37.0096C36.54 37.0096 37.2942 36.8231 38.1282 36.4506C38.9615 36.0781 39.8396 35.4487 40.7627 34.561C40.7627 33.036 40.7711 31.3679 40.7894 29.5582C40.8069 27.7485 40.8335 25.9571 40.8693 24.1829Z" fill="white"/>
                </svg>
            </a>
            <nav className='header-nav'>
                <ul className='header-nav__left'>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">membership</a></li>
                    <li><a href="#">our story</a></li>
                </ul>
                <ul className='header-nav__right'>
                    <li><a href="#">Newsletter</a></li>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;