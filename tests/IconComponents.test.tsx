import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import * as SourceIcons from '../src/index'; // Import directly from the source
// import * as PackageIcons from '@insidiouss/react-icons'; // Import from the package
import React from 'react';

// Test components directly from the source
describe('Icon Components (Source)', () => {
    Object.entries(SourceIcons).forEach(([iconName, IconComponent]) => {
        test(`${iconName} renders without crashing`, () => {
            const { container } = render(
                <IconComponent width={24} height={24} className="test-class" />,
            );
            expect(container.firstChild).toMatchSnapshot();
        });
    });
});

// Test components from the package import
// describe('Icon Components (Package Import)', () => {
//   Object.entries(PackageIcons).forEach(([iconName, IconComponent]) => {
//     test(`${iconName} renders without crashing`, () => {
//       const { container } = render(
//         <IconComponent width={24} height={24} className="test-class" avatar={undefined} size={undefined} />,
//       );
//       expect(container.firstChild).toMatchSnapshot();
//     });
//   });
// });