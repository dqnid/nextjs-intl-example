import { getDictionary } from "@/utils/dictionaries";

type ContentProps = {
  params: {
    lang: string;
  };
};
const Content = async (props: ContentProps) => {
  const { params } = props;
  const dict = await getDictionary(params.lang);
  return <div>{dict.generic.greeting}</div>;
};

export default Content;
