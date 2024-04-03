import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const activeTabItem = isActive ? 'active-tab-item' : 'tab-button'

  return (
    <li className="tab-item">
      <button type="button" className={activeTabItem} onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
