import HeaderImage from './header.jpg';
const contentDiv = document.querySelector('#content');

const createHeader = () => {
    const headerDiv = document.createElement('div');
    headerDiv.id = 'header';
    contentDiv.appendChild(headerDiv);

    const img = new Image();
    img.className = 'header-img';
    img.src = HeaderImage;
    headerDiv.appendChild(img);

    const textDiv = document.createElement('div');
    textDiv.className = 'header-text';
    headerDiv.appendChild(textDiv);

    const textFlexDiv = document.createElement('div');
    textFlexDiv.className = 'header-text-flex';
    textDiv.appendChild(textFlexDiv);

    const textH1 = document.createElement('h1');
    textH1.textContent = 'AlpineCatch';
    textFlexDiv.appendChild(textH1);

    const textPara = document.createElement('p');
    textPara.textContent = 'Freshwater food caught in our backyard';
    textFlexDiv.appendChild(textPara);
};

const createDescription = () => {
    const descriptionDiv = document.createElement('div');
    descriptionDiv.id = 'description';
    contentDiv.appendChild(descriptionDiv);

    const textH2 = document.createElement('h2');
    textH2.textContent = 'Our Origin';
    descriptionDiv.appendChild(textH2);

    const textPara = document.createElement('p');
    textPara.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
    augue, finibus ut nibh eget, fermentum gravida orci. Nam tempus,
    nibh ac sodales sagittis, enim libero tincidunt nisi, vitae porta
    justo lorem volutpat sem. Phasellus venenatis ultricies leo id
    imperdiet. Sed vitae dolor pharetra, ultrices magna a, mattis
    est. Etiam semper viverra est, quis sagittis turpis ornare nec.
    Nam eget cursus odio. Vestibulum vel mauris nec lorem ultrices
    auctor ut id ipsum. Duis nec feugiat quam, ac sagittis lorem.
    Nullam nec euismod ex. Etiam aliquet, arcu nec efficitur blandit,
    turpis odio blandit nulla, condimentum imperdiet felis augue eu
    lorem. Sed tristique a turpis eget ultrices. Aliquam quis
    fermentum augue. Suspendisse tincidunt ligula eget ultricies
    porta. Morbi non dui vitae odio faucibus vehicula. Vivamus id sem
    et est rutrum dapibus vel non ipsum. Interdum et malesuada fames
    ac ante ipsum primis in faucibus. Vivamus ultricies pellentesque
    risus eget rutrum. Sed gravida, ante sed dignissim vestibulum,
    lectus mauris maximus libero, et bibendum enim arcu a nisi.
    Maecenas ac tincidunt turpis. Proin a sagittis massa. Quisque ac
    pulvinar urna.`;
    descriptionDiv.appendChild(textPara);
};

export function pageLoad() {
    createHeader();
    createDescription();
}
