const context = {
  tenant: '',
  baseHref: ''
};

export const StyleGuideContext = ({
  Consumer(props) {
    return props.children(context);
  }
});
