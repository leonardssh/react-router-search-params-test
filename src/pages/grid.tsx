import { useSearchParams } from 'react-router-dom'

const GridPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleChangePage = () => {
    const pages = ['page-1', 'page-2', 'page-3', 'page-4', 'page-5']
    const randomPage = pages[Math.floor(Math.random() * pages.length)]

    const currentPage = searchParams.get('page')

    if (currentPage === randomPage) {
      handleChangePage()
      return
    }

    searchParams.set('page', randomPage)
    setSearchParams(searchParams)
  }

  const handleOpenModal = () => {
    const modals = ['modal-1', 'modal-2', 'modal-3', 'modal-4', 'modal-5']
    const randomModal = modals[Math.floor(Math.random() * modals.length)]

    const currentModal = searchParams.get('modal')

    if (currentModal === randomModal) {
      handleOpenModal()
      return
    }

    searchParams.set('modal', randomModal)
    setSearchParams(searchParams)
  }

  const handleChangeView = () => {
    const views = ['view-1', 'view-2', 'view-3', 'view-4', 'view-5']
    const randomView = views[Math.floor(Math.random() * views.length)]

    const currentView = searchParams.get('view')

    if (currentView === randomView) {
      handleChangeView()
      return
    }

    searchParams.set('view', randomView)
    setSearchParams(searchParams)
  }

  return (
    <>
      <div className="flex justify-center items-center my-5 text-xl font-inter text-gray-300">
        Grid Page
      </div>

      <nav>
        <ul className="flex gap-3 cursor-pointer font-inter text-sm text-gray-300">
          <li className="px-3 py-1 rounded-md bg-neutral-700/40" onClick={() => handleChangePage()}>
            Change page
          </li>
          <li className="px-3 py-1 rounded-md bg-neutral-700/40" onClick={() => handleOpenModal()}>
            Open modal
          </li>
          <li className="px-3 py-1 rounded-md bg-neutral-700/40" onClick={() => handleChangeView()}>
            Change View
          </li>
        </ul>
      </nav>

      <div className="mt-10">
        <div className="text-gray-300 font-inter">
          Current Page: {searchParams.get('page') ?? 'null'}
        </div>
        <div className="text-gray-300 font-inter">
          Current View: {searchParams.get('view') ?? 'null'}
        </div>
        <div className="text-gray-300 font-inter">
          Current Modal: {searchParams.get('modal') ?? 'null'}
        </div>
      </div>
    </>
  )
}

export default GridPage
