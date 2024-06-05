import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #FFC0CB;
  padding: 2px;
  display: flex; /* Menggunakan flexbox */
  justify-content: space-between; /* Mengatur jarak antara elemen di header */
  align-items: center; /* Mengatur posisi vertikal elemen */
`;

export const Logo = styled.img`
  height: 120px; /* Sesuaikan ukuran dengan kebutuhan Anda */
  width: auto; /* Sesuaikan ukuran dengan kebutuhan Anda */
`;

export const NavContainer = styled.nav`
  display: flex; /* Menggunakan flexbox */
  margin-right: 100px; /* Menggeser navbar ke kiri */
`;

export const NavLink = styled.a`
  margin-left: 20px; /* Jarak antar link */
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 20px; /* Mengatur ukuran teks navbar */
  &:hover {
    color: #555;
  }
`;
