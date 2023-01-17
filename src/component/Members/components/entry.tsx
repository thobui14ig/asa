/* eslint-disable jsx-a11y/alt-text */
export default function Entry(props: any) {
    const {
      mention,
      theme,
      searchValue, // eslint-disable-line @typescript-eslint/no-unused-vars
      isFocused, // eslint-disable-line @typescript-eslint/no-unused-vars
      ...parentProps
    } = props;
  
    return (
      <div {...parentProps}>
        <div className={theme?.mentionSuggestionsEntryContainer}>
          <div className={theme?.mentionSuggestionsEntryContainerLeft}>
            <img
              src={mention.avatar}
              className={theme?.mentionSuggestionsEntryAvatar}
              role="presentation"
            />
          </div>
  
          <div className={theme?.mentionSuggestionsEntryContainerRight}>
            <div className={theme?.mentionSuggestionsEntryText}>
              {mention.name}
            </div>
  
            <div className={theme?.mentionSuggestionsEntryTitle}>
              {mention.title}
            </div>
          </div>
        </div>
      </div>
    );
  }

