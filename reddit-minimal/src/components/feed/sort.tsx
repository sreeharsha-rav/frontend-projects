import React from 'react';

const styles = {
  sortDropdown: 'mb-4 p-2 border rounded',
};

type SortOption = '' | 'new' | 'hot' | 'top';   // TODO: Consider moving this to a shared location

interface SortProps {
  sort: string;
  onSortChange: (sort: SortOption) => void;
}

/**
 * Sort component for selecting the sorting option.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.sort - The current sorting option.
 * @param {Function} props.onSortChange - The function to handle sorting option change.
 * @returns {JSX.Element} The rendered Sort component.
 */
const Sort: React.FC<SortProps> = React.memo(({ sort, onSortChange }) => {
  
  return (
    <select 
      className={styles.sortDropdown}
      value={sort}
      onChange={(e) => onSortChange(e.target.value as SortOption)}
    >
      <option value="">Best</option>
      <option value="new">New</option>
      <option value="hot">Hot</option>
      <option value="top">Top</option>
    </select>
  );
});

export default Sort;