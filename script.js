const SectionFirst = document.querySelector('.sectionFirst');
SectionFirst.style.borderBottom = '2px solid gray';
const TextTitle = [
    'make everything feel easier'
];

const TextTitleSecond = [
    'keep your house under your control.'
];

const TextTitleThird = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi consectetur aliquid similique nemo tenetur doloribus.'
];

const BtnFirst = [
    'sign in'
];

const BtnSecond = [
    'read more'
];

function renderText () {
    const SectionFirstTitle = document.createElement('div');
    const image = document.createElement('img');
    const SectionSecondTitle = document.createElement('div');
    const SectionThirdTitle = document.createElement('div');
    const SectionforthTitle = document.createElement('div');
    const SectionFlexContainer = document.createElement('div');
    const SectionBtnFirst = document.createElement('button')
    const SectionBtnSecond = document.createElement('button')
    const imageStart = document.createElement('img');
    imageStart.src = 'image/star-svgrepo-com.svg';
    SectionFlexContainer.appendChild(SectionFirstTitle);
    SectionFlexContainer.appendChild(SectionSecondTitle);
    SectionFlexContainer.appendChild(SectionThirdTitle);
    SectionFlexContainer.appendChild(SectionforthTitle);
    SectionFlexContainer.appendChild(imageStart);
    SectionforthTitle.appendChild(SectionBtnFirst);
    SectionforthTitle.appendChild(SectionBtnSecond);
    image.src = 'image/img1.png';
    SectionFirst.appendChild(SectionFlexContainer);
    SectionFirst.appendChild(image);
    SectionFirstTitle.innerText = TextTitle;
    SectionSecondTitle.innerText = TextTitleSecond;
    SectionThirdTitle.innerText = TextTitleThird;
    SectionBtnFirst.innerText = BtnFirst;
    SectionBtnSecond.innerText = BtnSecond;
    SectionFirstTitle.classList.add('TextTitle');
    SectionSecondTitle.classList.add('TextTitleSecond');
    SectionThirdTitle.classList.add('TextTitleThird');
    SectionBtnFirst.classList.add('BtnFirst');
    SectionBtnSecond.classList.add('BtnSecond');
    SectionforthTitle.classList.add('SectionforthTitle');
    image.classList.add('imageStart')
    imageStart.classList.add('CtartIcon')

};
renderText();
const SectionNavigation = document.querySelector('.navigation');
SectionNavigation.style.height = '10vh';
SectionNavigation.style.borderBottom = '2px solid gray';
const navList = [
    'SMART TECHNOLOGY', 
    'ACCESORIES',
    'SOFTWARE',
];
function renderNavigation() {
    const navigation = document.createElement('div');
    SectionNavigation.appendChild(navigation);
    navigation.classList.add('navigation');

    for(let i = 0; i < navList.length; i++) {
        const navLink = document.createElement('a');
        navigation.appendChild(navLink);
        navLink.innerText = navList[i];
        navLink.classList.add('navigation-link');
    }
}

renderNavigation();
const SectionCards = document.querySelector('.cards');
SectionCards.style.height = '70vh';
const cards = [
    {title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eveniet quas illum inventore. Quaerat, praesentium.',text : 'Lorem ipsum dolor amet consector.', img : 'image/img3.png', button : 'read more' },
    {title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eveniet quas illum inventore. Quaerat, praesentium.',text : 'Lorem ipsum dolor amet consector.', img : 'image/img2.png', button : 'read more' },
    {title : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eveniet quas illum inventore. Quaerat, praesentium.',text : 'Lorem ipsum dolor amet consector.', img : 'image/img4.png', button : 'read more' },
];

for (let i = 0; i <cards.length; i++) {
    const card = document.createElement('div');
    const image = document.createElement('img');
    const cardTitle = document.createElement('div');
    const cardText = document.createElement('div');
    const cardButton = document.createElement('button');
    image.src = cards[i].img;
    cardTitle.innerText = cards[i].text;
    cardText.innerText = cards[i].title;
    cardButton.innerText = cards[i].button;
    SectionCards.appendChild(card);
    card.appendChild(image);
    card.appendChild(cardTitle);
    card.appendChild(cardText);
    card.appendChild(cardButton);
    SectionCards.classList.add('cardFlexContainer')
    cardTitle.classList.add('cardFirstTitle')
    cardText.classList.add('cardsFirstTexter')
    cardButton.classList.add('cardsButton')
};
const SectionDiscription = document.querySelector('.discription');
SectionDiscription.style.height = '70vh';
SectionDiscription.style.borderBottom = '2px solid gray';
SectionDiscription.style.paddingBottom = '4%';
const discriptionLogo = [
    'why us', 
];

const DiscriptionTexter = [
    'Lorem ipsum dolor amet, conctreon', 
];

const DiscriptionDeeper = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab consectetur adipiscing elit, sed do eiusmod tempor consectetur adipiscing elit, sed do eiusmod tempor consectetur adipiscing elit, sed do eiusmod tempor'
]

const DiscriptionDeeperBtn = [
    'read more', 
];

function renderDiscription() {
    const Discription = document.createElement('div'); 
    const imageDiscription = document.createElement('img');
    const DiscriptionTitle = document.createElement('div');
    const DiscriptionText = document.createElement('div');
    const DiscriptionDeep = document.createElement('div');
    const DiscriptionBtn = document.createElement('button');
    imageDiscription.src = 'image/banner-final.jpg.png';
    SectionDiscription.appendChild(Discription);
    SectionDiscription.appendChild(imageDiscription);
    Discription.appendChild(DiscriptionTitle);
    Discription.appendChild(DiscriptionText);
    Discription.appendChild(DiscriptionDeep);
    Discription.appendChild(DiscriptionBtn);
    DiscriptionTitle.innerText = discriptionLogo;
    DiscriptionText.innerText = DiscriptionTexter;
    DiscriptionDeep.innerText = DiscriptionDeeper;
    DiscriptionBtn.innerText = DiscriptionDeeperBtn;
    DiscriptionTitle.classList.add('DiscriptionTitle');
    Discription.classList.add('DiscriptionContainer');
    DiscriptionText.classList.add('DiscriptionText');
    DiscriptionDeep. classList.add('DiscriptionDeep');
    DiscriptionBtn. classList.add('cardsButtonDeep');
}
renderDiscription();
const footerContainer = document.querySelector('.footerContainer');
footerContainer.style.height = '40vh';
footerContainer.style.backgroundColor = 'grey';
const liList = [
    'History', 
    'Our team',
    'Mission Statement',
    'Terms & Condition',
    'Privacy Policy',
];

const liListSecond = [
    'News and stories', 
    'Publications',
    'Take action',
    'Recomendations',
    'Help',
];

const FooterPartFirst  = [
    'about', 
];

const FooterPartSecond  = [
    'What we do', 
];

const FooterPartThree  = [
    'Sign Up To Receive Our Newsletter', 
];

function renderFooter() {
    const footerFlexContainer = document.createElement('div');
    footerContainer.appendChild(footerFlexContainer);

    const footerTopic = document.createElement('div');
    const footerLogo = document.createElement('h2');
    const footerUlContainer = document.createElement('ul');
    const footerInput = document.createElement('input')
    const footerIcon = document.createElement('img')
    const footerIconSecond = document.createElement('img')
    const footerIconThree = document.createElement('img')
    footerIcon.src = 'image/facebook-svgrepo-com.svg';
    footerIconSecond.src = 'image/instagram-svgrepo-com.svg';
    footerIconThree.src = 'image/youtube-svgrepo-com\ .svg';
    const footerTopicSecond = document.createElement('div');
    const footerLogoSecond = document.createElement('h2');
    const footerUlContainerSecond = document.createElement('ul');
    const footerTopicThree = document.createElement('div');
    const footerLogoThree = document.createElement('h2');
    footerFlexContainer.appendChild(footerTopic);
    footerFlexContainer.appendChild(footerTopicSecond);
    footerFlexContainer.appendChild(footerTopicThree);
    footerTopic.appendChild(footerLogo);
    footerTopic.appendChild(footerUlContainer);
    footerTopicSecond.appendChild(footerLogoSecond);
    footerTopicSecond.appendChild(footerUlContainerSecond);
    footerTopicThree.appendChild(footerLogoThree);
    footerTopicThree.appendChild(footerInput);
    footerTopicThree.appendChild(footerIcon);
    footerTopicThree.appendChild(footerIconSecond);
    footerTopicThree.appendChild(footerIconThree);
    footerLogo.innerText = FooterPartFirst;
    footerLogoSecond.innerText = FooterPartSecond;
    footerLogoThree.innerText = FooterPartThree;
    footerUlContainer.classList.add('endlogo');
    footerUlContainerSecond.classList.add('endlogo');
    footerFlexContainer.classList.add('footerFlexContainer');
    footerLogo.classList.add('LogoSub');
    footerLogoSecond.classList.add('LogoSub');
    footerLogoThree.classList.add('LogoSub');
    footerInput.classList.add('footerInputSection');
    footerIcon.classList.add('footerIcon');
    footerIconSecond.classList.add('footerIcon');
    footerIconThree.classList.add('footerIcon');

    for (let i = 0; i < liList.length; i++) {
        const footerLiContainer = document.createElement('li');
        footerUlContainer.appendChild(footerLiContainer);
        footerLiContainer.innerText = liList[i];
        footerLiContainer.classList.add('footerLiContainerDeep');
    }

    for (let i = 0; i < liList.length; i++) {
        const footerLiContainerSecond = document.createElement('li');
        footerUlContainerSecond.appendChild(footerLiContainerSecond);
        footerLiContainerSecond.innerText = liListSecond[i];
        footerLiContainerSecond.classList.add('footerLiContainerDeepSecond');
    }
}
renderFooter();




































