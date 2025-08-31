import ContentLoader, { type IContentLoaderProps } from "react-content-loader";

const CourseCardLoader = ({...props}: IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    width={250}
    height={180}
    viewBox="0 0 250 180"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* Заголовок */}
    <rect x="16" y="15" rx="4" ry="4" width="180" height="20" />

    {/* Опис рядків */}
    <rect x="16" y="50" rx="3" ry="3" width="200" height="12" />
    <rect x="16" y="70" rx="3" ry="3" width="180" height="12" />
    <rect x="16" y="90" rx="3" ry="3" width="140" height="12" />

    {/* Ціна */}
    <rect x="16" y="130" rx="4" ry="4" width="50" height="20" />

    {/* Кнопка */}
    <rect x="160" y="125" rx="8" ry="8" width="70" height="32" />
  </ContentLoader>
);

export default CourseCardLoader;
