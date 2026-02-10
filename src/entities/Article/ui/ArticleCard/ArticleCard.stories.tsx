import type { Meta, StoryObj } from '@storybook/react-webpack5';
import ArticleCard from './ArticleCard';
import type { ArticlePreview } from '../../model/types/article';
import { ArticleType, ArticlePreviewStyle } from '../../model/consts/articleConsts';
import ThemeDecorator from 'config/storybook/decorators/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'entities/ArticleCard',
  component: ArticleCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  // args: { onClick: fn() },
} satisfies Meta<typeof ArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const args: ArticlePreview = {
  id: '1',
  authorId: '1',
  createdAt: `01.05.2022`,
  title: `Title of article #1. Read the whole article. Et perferendis nulla debitis tempora.`,
  excerpt: 'Quos iure dolor. Non corporis qui beatae ipsam. Nulla labore cumque sequi eos voluptatem. Sint est dolorem nihil veritatis. Ipsum consequatur saepe dolor dolores et beatae alias unde iure. Hic necessitatibus porro eius et assumenda alias. Facilis est culpa. Quo inventore eos repellat ea. Ut magni ut ex. Fugiat est placeat quas repudiandae minus sit pariatur. Sequi porro facere. Maxime tempore libero fugit ad. Et accusantium maxime deleniti vitae voluptas non aut vero rerum. Iusto culpa sint. Ut corporis est incidunt quas optio animi autem praesentium alias. Voluptatem error libero saepe id repudiandae iure et dolorem autem. Voluptatem facilis labore.',
  type: [ArticleType.ECONOMICS, ArticleType.IT, ArticleType.SCIENCE],
  views: 12812,
  content: "<h2>Javascript news</h2><p><img src=\"https://teknotower.com/wp-content/uploads/2020/11/js.png\"></p><h2>Что нового в JS за 2022 год?</h2><h3>Заголовок этого блока</h3><p>Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.</p><p>JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.</p><p>Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега &lt;script&gt;. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:</p><pre><code class=\"language-plaintext\">&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n  &lt;body&gt;\n    &lt;p id=\"hello\"&gt;&lt;/p&gt;\n\n    &lt;script&gt;\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    &lt;/script&gt;\n  &lt;/body&gt;\n&lt;/html&gt;;</code></pre><h3>Заголовок этого блока</h3><p>Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.</p><p>Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега &lt;script&gt;. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:</p><p><img src=\"https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png\" alt=\"Рисунок 1 - скриншот сайта\"></p><h4>Рисунок 1 - скриншот сайта</h4><pre><code class=\"language-plaintext\">const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);</code></pre><h3>Заголовок этого блока</h3><p>JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.</p><p>Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега &lt;script&gt;. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:</p><p><img src=\"https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png\" alt=\"Рисунок 1 - скриншот сайта\"></p><h4>Рисунок 1 - скриншот сайта</h4><h3>Заголовок этого блока</h3><p>JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.</p>"
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LightArticleCardTile: Story = {
  args,
  decorators: [ThemeDecorator],
};

export const DarkArticleCardTile = {
  args,
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};

export const LightArticleCardListItem: Story = {
  args: {
    ...args,
    previewStyle: ArticlePreviewStyle.LIST_ITEMS,
  },
  decorators: [ThemeDecorator],
};

export const DarkArticleCardListItem = {
  args: {
    ...args,
    previewStyle: ArticlePreviewStyle.LIST_ITEMS,
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};

export const LightArticleCardRow: Story = {
  args: {
    ...args,
    previewStyle: ArticlePreviewStyle.ROW,
  },
  decorators: [ThemeDecorator],
};

export const DarkArticleCardRow = {
  args: {
    ...args,
    previewStyle: ArticlePreviewStyle.ROW,
  },
  decorators: [ThemeDecorator],
  parameters: { theme: Themes.DARK },
};